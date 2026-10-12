import {appearsBlack} from './capture-check.js';
const start=document.querySelector('#record-start'),stop=document.querySelector('#record-stop'),download=document.querySelector('#record-download'),status=document.querySelector('#record-status'),clock=document.querySelector('#record-clock'),preview=document.querySelector('#record-preview');
let recorder=null,stream=null,timer=null,began=0,videoUrl=null,extension='webm';
const limit=170000;
const cues=[
 [0,'Unearthing invisible talent','SkillStrata explores reasoning that job titles can overlook. This is an independent Alexa+-style, non-generative guided simulation.'],
 [20000,'Realistic choices, explicit state','Choose The unexpected signal. The fictional examples are editable test data. A deterministic policy selects a clarification from the initial response.'],
 [55000,'Second Perspective','Circumstances change: the technician is delayed and a colleague feels pressured. Describe how the plan should adapt. Compare the two responses.'],
 [80000,'Evidence you can question','Open the constellation. Every observation has an exact source and matched words. Contest a record: a hypothetical response is not a verified action.'],
 [115000,'Language and privacy','Switch the interface to Ukrainian, then back to English. Text processing is local. Voice is optional and may use a browser provider.'],
 [140000,'A portable reflection','Open Report and preview the default private export. Exact responses are omitted. This is reflection, not a qualification or employment score.']
];
function cue(elapsed){const active=cues.filter(c=>c[0]<=elapsed).at(-1);document.querySelector('#cue-title').textContent=active[1];document.querySelector('#cue-body').textContent=active[2];}
function release(){if(timer)clearInterval(timer);timer=null;stream?.getTracks().forEach(track=>track.stop());stream=null;stop.disabled=true;start.disabled=false;}
function stopRecording(){if(recorder?.state==='recording')recorder.stop();else release();}
preview.addEventListener('loadeddata',()=>{const quality=document.querySelector('#record-quality');try{const canvas=document.createElement('canvas');canvas.width=32;canvas.height=18;const context=canvas.getContext('2d');context.drawImage(preview,0,0,32,18);const black=appearsBlack(context.getImageData(0,0,32,18).data);quality.textContent=black?'Warning: the preview appears black. Do not publish this clip. Try selecting the SkillStrata tab in an ordinary Chrome or Edge window.':'First frame contains visible image data. Play the full video to check readability, timing and privacy before publishing.';}catch{quality.textContent='Automatic frame check unavailable. Play and inspect the full video before publishing.';}});
const available=!!(navigator.mediaDevices?.getDisplayMedia&&window.MediaRecorder);
start.disabled=!available;
status.textContent=available?'Ready. Start requires you to select a browser surface in the sharing picker.':'Screen recording is unavailable in this browser. Open this local page in Chrome or Edge and try again.';
start.onclick=async()=>{
 document.querySelector('#record-quality').textContent='';
 start.disabled=true;status.textContent='Choose only the SkillStrata tab or window. This browser picker requires your action.';
 try{
  stream=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:'browser',frameRate:{ideal:24,max:30}},audio:false,preferCurrentTab:true});
  const preferred=['video/webm;codecs=vp8','video/webm;codecs=vp9','video/mp4'].find(m=>MediaRecorder.isTypeSupported(m));
  recorder=new MediaRecorder(stream,preferred?{mimeType:preferred}:undefined);extension=recorder.mimeType.includes('mp4')?'mp4':'webm';
  const chunks=[];recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
  recorder.onstop=async()=>{release();if(videoUrl)URL.revokeObjectURL(videoUrl);const blob=new Blob(chunks,{type:recorder.mimeType});videoUrl=URL.createObjectURL(blob);preview.src=videoUrl;preview.hidden=false;download.disabled=false;status.textContent='Recording complete. Saving into the local project recordings folder…';
   try{const response=await fetch('/api/recording',{method:'POST',headers:{'Content-Type':recorder.mimeType},body:blob});if(!response.ok)throw new Error('Local save failed');const saved=await response.json();status.textContent='Saved locally: recordings/'+saved.filename+' ('+saved.bytes+' bytes). Review this real video before publishing. No external upload occurred.';}catch{status.textContent='Video captured, but automatic local save failed. Use Download video and review it before publishing.';}
  };
  recorder.onerror=()=>{status.textContent='Recording failed. Stop and try another supported browser.';release();};
  stream.getVideoTracks()[0].onended=stopRecording;
  began=performance.now();download.disabled=true;preview.hidden=true;cue(0);stop.disabled=false;recorder.start(1000);status.textContent='Recording real browser footage. Use fictional data. Stop whenever ready.';
  timer=setInterval(()=>{const elapsed=performance.now()-began,seconds=Math.floor(elapsed/1000);clock.textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0')+' / 02:50';cue(elapsed);if(elapsed>=limit)stopRecording();},250);
 }catch(error){release();status.textContent='Recording not started ('+(error.name||'unavailable')+'). No video was captured. You can retry without changing browser security settings.';}
};
stop.onclick=stopRecording;
download.onclick=()=>{if(!videoUrl)return;const a=document.createElement('a');a.href=videoUrl;a.download='skillstrata-live-demo.'+extension;a.click();};
window.addEventListener('pagehide',()=>{stopRecording();if(videoUrl)URL.revokeObjectURL(videoUrl);});
