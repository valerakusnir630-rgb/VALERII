/** Explicit deterministic tool orchestration. A future server adapter must implement this contract. */
import {startScenario,submitAnswer,currentPrompt,generateReflection} from './engine.js';
export class GuidedDemoAdapter {
  mode='guided-demo';
  generative=false;
  begin(session,id){startScenario(session,id);return {session,prompt:currentPrompt(session)};}
  respond(session,text){submitAnswer(session,text);return {session,prompt:currentPrompt(session),reflection:session.runs[session.active].stage==='complete'?generateReflection(session,session.active):null};}
}
/** Reserved seam, deliberately unavailable until a real provider is implemented and approved.
 * Keep credentials on a server. Validate returned tool calls, evidence quotes and state transitions.
 * Never turn a provider failure into an unlabelled scripted response.
 */
export class ServerAIAdapter {
  mode='unconfigured-ai';
  async respond(){throw new Error('No AI provider configured. Use the labelled guided demonstration.');}
}
