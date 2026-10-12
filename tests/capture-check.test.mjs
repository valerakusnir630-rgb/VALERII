import test from 'node:test';
import assert from 'node:assert/strict';
import {appearsBlack} from '../src/capture-check.js';
test('black-frame warning distinguishes empty or black output from the dark application background',()=>{assert.equal(appearsBlack(null),true);assert.equal(appearsBlack(new Uint8Array([0,0,0,255,1,1,1,255])),true);assert.equal(appearsBlack(new Uint8Array([17,29,37,255,241,242,233,255])),false);});
