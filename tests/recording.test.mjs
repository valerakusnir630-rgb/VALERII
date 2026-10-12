import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readdir,readFile,unlink,rmdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createServer} from '../server.mjs';
test('recording endpoint only accepts bounded same-origin video and saves in a fixed directory',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'skillstrata-recording-test-')),server=createServer({recordingDir:dir,recordingLimit:1000});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{const base=`http://127.0.0.1:${server.address().port}`,container=Buffer.from([0x1a,0x45,0xdf,0xa3,0,0,0,0]);
  const send=(origin,type,body)=>fetch(base+'/api/recording',{method:'POST',headers:{Origin:origin,'Content-Type':type},body});
  assert.equal((await send('https://external.example','video/webm',container)).status,403);
  assert.equal((await send(base,'text/plain',container)).status,415);
  assert.equal((await send(base,'video/webm','not a video')).status,422);
  const result=await send(base,'video/webm',container);assert.equal(result.status,201);const saved=await result.json();assert.match(saved.filename,/^SkillStrata-demo-\d+\.webm$/);assert.deepEqual(await readFile(join(dir,saved.filename)),container);
  assert.equal((await send(base,'video/webm',Buffer.alloc(1001))).status,413);
  assert.equal((await readdir(dir)).length,1);
 }finally{await new Promise(resolve=>server.close(resolve));for(const filename of await readdir(dir))await unlink(join(dir,filename));await rmdir(dir);}
});
