/** Injectable browser speech controller. Tests simulate lifecycle only, not hardware or providers. */
export function createVoiceController(browser){
 const Speech=browser.SpeechRecognition||browser.webkitSpeechRecognition;
 let active=null,generation=0;
 return {
  supported:!!Speech,
  get listening(){return active!==null;},
  abort(){generation++;const old=active;active=null;old?.abort();},
  stop(){active?.stop();},
  start({lang,onTranscript,onError,onEnd}){
   if(!Speech){onError('unsupported');return false;}
   if(active)return false;
   const current=++generation,recognizer=new Speech();active=recognizer;
   recognizer.lang=lang==='uk'?'uk-UA':'en-GB';recognizer.interimResults=false;recognizer.continuous=false;
   recognizer.onresult=event=>{if(current===generation)onTranscript(event.results[0][0].transcript);};
   recognizer.onerror=event=>{if(current===generation)onError(event.error||'unknown');};
   recognizer.onend=()=>{if(current!==generation)return;active=null;onEnd();};
   try{recognizer.start();return true;}catch{active=null;onError('start-failed');onEnd();return false;}
  }
 };
}
