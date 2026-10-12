import {scenarios,rules,skills} from './scenarios.js';
export const VERSION=1;
export const MAX_ANSWER=4000;
export function createSession(lang='en'){return {version:VERSION,lang:lang==='uk'?'uk':'en',started:false,active:null,runs:{},claim:'',events:[]};}
export function getScenario(id){const s=scenarios.find(s=>s.id===id);if(!s)throw new Error('Unknown scenario');return s;}
export function recordEvent(s,tool){s.events.push({tool});s.events=s.events.slice(-100);}
export function startScenario(s,id){getScenario(id);s.started=true;s.active=id;s.runs[id]??={stage:'initial',answers:[],evidence:[],disputes:{},followup:null};recordEvent(s,'get_scenario');return s;}
function validateAnswer(text){if(typeof text!=='string'||!text.trim()||text.length>MAX_ANSWER)throw new Error('Answer must contain 1–4000 characters');return text.trim();}
export function collectEvidence(id,answers){
 const focus=getScenario(id).focus;
 return answers.flatMap((answer,index)=>rules.filter(r=>focus.includes(r.skill)||index===2).flatMap(rule=>{
  const matches=[...answer.text.matchAll(new RegExp(rule.pattern.source,rule.pattern.flags))];
  if(!matches.length)return [];
  return [{id:`${id}:${index}:${rule.skill}`,scenario:id,skill:rule.skill,stage:answer.stage,quote:answer.text,matched:[...new Set(matches.map(m=>m[0]))],interpretation:{en:rule.en,uk:rule.uk},status:'observed',note:''}];
 }));
}
export function submitAnswer(s,text){
 if(!s.active)throw new Error('No active scenario');const run=s.runs[s.active];
 if(run.stage==='complete')throw new Error('Scenario complete');
 run.answers.push({stage:run.stage,text:validateAnswer(text)});
 run.evidence=collectEvidence(s.active,run.answers).map(e=>({...e,...(run.disputes[e.id]||{})}));
 recordEvent(s,'collect_evidence');
 if(run.stage==='initial'){
  const scenario=getScenario(s.active);run.followup=run.evidence.some(e=>e.skill===scenario.focus[0])?'clarification':'missing';run.stage='clarification';recordEvent(s,'choose_clarification');
 }else if(run.stage==='clarification'){run.stage='perspective';recordEvent(s,'introduce_second_perspective');}
 else {run.stage='complete';recordEvent(s,'generate_reflection');}
 recordEvent(s,'update_state');return s;
}
export function currentPrompt(s){if(!s.active)return '';const scenario=getScenario(s.active),run=s.runs[s.active];return promptFor(scenario,run,run.stage,s.lang);}
export function promptFor(scenario,run,stage,lang){if(stage==='complete')return '';return scenario[stage==='clarification'?(run.followup||'clarification'):stage][lang];}
export function reviseAnswer(s,id,index,text){const run=s.runs[id];if(!run||!run.answers[index])throw new Error('Unknown answer');run.answers[index].text=validateAnswer(text);run.disputes={};run.evidence=collectEvidence(id,run.answers);recordEvent(s,'revise_answer');return s;}
export function challengeEvidence(s,id,note){for(const run of Object.values(s.runs)){const e=run.evidence.find(e=>e.id===id);if(e){e.status=e.status==='contested'?'observed':'contested';e.note=typeof note==='string'?note.trim().slice(0,1000):'';run.disputes[id]={status:e.status,note:e.note};recordEvent(s,'challenge_interpretation');return s;}}throw new Error('Unknown evidence');}
export function allEvidence(s){return Object.values(s.runs).flatMap(r=>r.evidence);}
export function evidenceConnections(s){const evidence=allEvidence(s).filter(e=>e.status==='observed');return skills.flatMap((a,i)=>skills.slice(i+1).flatMap(b=>evidence.some(e=>e.skill===a.id&&evidence.some(f=>f.skill===b.id&&f.scenario===e.scenario&&f.stage===e.stage))?[[a.id,b.id]]:[]));}
export function generateReflection(s,id){
 const run=s.runs[id],scenario=getScenario(id);if(!run||run.stage!=='complete')throw new Error('Not completed');
 const observed=run.evidence.filter(e=>e.status==='observed');
 return {scenario:id,observed,unknown:skills.filter(skill=>!observed.some(e=>e.skill===skill.id)).map(skill=>skill.id),before:run.answers[0].text,after:run.answers[2].text,practice:scenario.practice[s.lang]};
}
export function generateReport(s,{includeQuotes=false}={}){
 const uk=s.lang==='uk',label=uk?'Особистий звіт відкриття':'Personal discovery report';
 const lines=[`# SkillStrata — ${label}`,'',uk?'Демонстрація без генеративного AI. Спостереження за словами, а не оцінка здібностей.':'Non-generative guided simulation. Phrase observations, not ability scores.',
 uk?'Це саморефлексія, а не сертифікація, психологічний тест або оцінка придатності до роботи.':'Self-reflection only; not certification, psychometrics or employment suitability.',''];
 if(s.claim.trim())lines.push(uk?'## Самостійне твердження (не перевірене)':'## Self-reported claim (unverified)',includeQuotes?s.claim:(uk?'Приховано для приватного експорту.':'Omitted for private export.'),'');
 for(const scenario of scenarios){const run=s.runs[scenario.id];if(!run)continue;
  lines.push(`## ${scenario.title[s.lang]} — ${run.stage==='complete'?(uk?'Завершено':'Complete'):(uk?'Не завершено':'Incomplete')}`);
  if(run.stage!=='complete'){lines.push(uk?'Висновок ще не сформовано.':'No completed reflection yet.','');continue;}
  const r=generateReflection(s,scenario.id);
  for(const e of run.evidence){const stage=uk?({initial:'Початок',clarification:'Уточнення',perspective:'Другий погляд'})[e.stage]:e.stage;const status=uk?(e.status==='contested'?'Оскаржено':'Знайдено слова'):e.status;lines.push(`- ${skills.find(k=>k.id===e.skill)[s.lang]} [${stage}; ${status}; ${e.id}]: ${e.interpretation[s.lang]}`,`${uk?'Збіги':'Matched phrases'}: ${includeQuotes?e.matched.join(', '):(uk?'Приховано':'Omitted')}`);if(includeQuotes)lines.push(`  ${uk?'Точна відповідь':'Exact response'}: ${JSON.stringify(e.quote)}`);if(includeQuotes&&e.note)lines.push(`  ${uk?'Заперечення':'Challenge'}: ${JSON.stringify(e.note)}`);}
  lines.push(uk?'### Еволюція міркування':'### Reasoning evolution',includeQuotes?`${uk?'Спочатку':'Before'}: ${JSON.stringify(r.before)}\n${uk?'Після зміни':'After change'}: ${JSON.stringify(r.after)}`:(uk?'Відповіді приховано. Перегляньте порівняння в застосунку.':'Responses omitted. Inspect the comparison in the app.'),`${uk?'Невідоме':'Unknown'}: ${r.unknown.map(id=>skills.find(k=>k.id===id)[s.lang]).join(', ')|| (uk?'Перенесення навичок у реальний світ не перевірено.':'Real-world transfer remains untested.')}`,`${uk?'Практика':'Practice'}: ${r.practice}`,'');
 }
 lines.push(uk?'## Обмеження':'## Limitations',uk?'Правила шукають окремі слова і можуть помилитися щодо заперечення, контексту або наміру. Згадування дії не доводить її виконання. Відсутність збігу не доводить відсутності здібності. Перевірте інтерпретації самостійно.':'Rules match phrases and can misread negation, context or intent. Describing an action does not prove performing it. No match does not mean no ability. Review and challenge interpretations.');return lines.join('\n');
}
// Rebuild derived evidence on load. Never trust persisted HTML or evidence objects.
export function restoreSession(raw){
 try{const data=JSON.parse(raw);if(data.version!==VERSION)throw new Error();const s=createSession(data.lang);s.started=!!data.started;s.claim=typeof data.claim==='string'?data.claim.slice(0,1000):'';
  for(const scenario of scenarios){const input=data.runs?.[scenario.id];if(!input)continue;if(!Array.isArray(input.answers)||input.answers.length>3)throw new Error();startScenario(s,scenario.id);for(const answer of input.answers)submitAnswer(s,answer.text);
   for(const e of s.runs[scenario.id].evidence){const d=input.disputes?.[e.id];if(d?.status==='contested')challengeEvidence(s,e.id,d.note);}
   // A revision must not rewrite which historical clarification the user answered.
   if(['clarification','missing'].includes(input.followup))s.runs[scenario.id].followup=input.followup;
  }s.active=data.active&&s.runs[data.active]?data.active:null;return s;
 }catch{return createSession();}
}
