import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});await copyFile('index.html','dist/index.html');await copyFile('demo.html','dist/demo.html');await cp('src','dist/src',{recursive:true});console.log('Static build created in dist/. Run node server.mjs for the local source preview.');
