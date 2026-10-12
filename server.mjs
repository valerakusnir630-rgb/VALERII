import http from 'node:http';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'};
export function createServer({recordingDir=path.join(root,'recordings'),recordingLimit=200*1024*1024}={}){return http.createServer(async(req,res)=>{
 res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('Permissions-Policy','camera=(), geolocation=()');
 res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self' blob:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'self'");
 if(req.method==='POST'&&req.url==='/api/recording'){
  const origin=req.headers.origin,localPort=req.socket.localPort;
  if(![`http://127.0.0.1:${localPort}`,`http://localhost:${localPort}`].includes(origin)){res.writeHead(403);res.end('Same-origin recording only');return;}
  const mime=String(req.headers['content-type']||'');
  if(!/^video\/(webm|mp4)(;.*)?$/.test(mime)){res.writeHead(415);res.end('Video format required');return;}
  const parts=[];let size=0;
  try{for await(const chunk of req){size+=chunk.length;if(size>recordingLimit){res.writeHead(413);res.end('Recording exceeds local limit');return;}parts.push(chunk);}
   const body=Buffer.concat(parts),ext=mime.startsWith('video/mp4')?'mp4':'webm';
   const valid=ext==='webm'?body.subarray(0,4).equals(Buffer.from([0x1a,0x45,0xdf,0xa3])):body.subarray(4,8).toString()==='ftyp';
   if(!valid){res.writeHead(422);res.end('Invalid video container');return;}
   await mkdir(recordingDir,{recursive:true});const filename=`SkillStrata-demo-${Date.now()}.${ext}`;
   await writeFile(path.join(recordingDir,filename),body,{flag:'wx'});res.writeHead(201,{'Content-Type':'application/json'});res.end(JSON.stringify({filename,bytes:size}));
  }catch{if(!res.headersSent){res.writeHead(500);res.end('Local recording could not be saved');}}return;
 }
 if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);res.end('Method not allowed');return;}
 try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const relative=pathname==='/'?'index.html':pathname.replace(/^\//,'');
  // Explicit public surface: never serve docs, tests, env files or repository metadata.
  if(!['index.html','demo.html'].includes(relative)&&!/^src\/[a-z-]+\.(js|css)$/.test(relative)){res.writeHead(404);res.end('Not found');return;}
  const content=await readFile(path.join(root,relative));res.writeHead(200,{'Content-Type':types[path.extname(relative)]||'text/plain'});res.end(req.method==='HEAD'?undefined:content);
 }catch{res.writeHead(404);res.end('Not found');}
 });}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const server=createServer();server.on('error',e=>{console.error(e.code==='EADDRINUSE'?`Port ${port} is busy. Set PORT to another number.`:e.message);process.exitCode=1;});server.listen(port,'127.0.0.1',()=>console.log(`SkillStrata Local: http://127.0.0.1:${port}`));
}
