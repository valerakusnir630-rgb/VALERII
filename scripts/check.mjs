import {spawnSync} from 'node:child_process';
import {readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const files=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){if(entry.name==='.git'||entry.name==='dist'||entry.name==='node_modules')continue;const p=resolve(dir,entry.name);if(entry.isDirectory())await walk(p);else if(/\.(mjs|js)$/.test(p))files.push(p);}}
await walk('.');for(const file of files){const r=spawnSync(process.execPath,['--check',file],{stdio:'inherit'});if(r.status!==0)process.exit(1);}console.log(`Syntax checked ${files.length} JavaScript modules. No TypeScript compiler is used.`);
