# SkillStrata: Unearthing Invisible Talent

Human potential deserves to be discovered, not filtered out.

SkillStrata is a functional bilingual self-reflection application. It uses realistic challenges, a meaningful change in circumstances (Second Perspective), and an inspectable Evidence Constellation. This release is a clearly labelled **non-generative guided demonstration**, intended as an independent Alexa+-style simulated experience. It has no official Alexa+ connection, MCP server, Amazon SDK integration or live AI provider.

## Run locally

Requires Node.js 22 or later. No packages, API keys, accounts or paid services are required.

From this folder:

```sh
node server.mjs
```

Open http://127.0.0.1:4173 in a browser on the same computer. The server binds only to loopback; phones cannot reach it over the network. If the port is busy, set `PORT` to another value. In Windows PowerShell: `$env:PORT='4174'`, then run the command again. Stop the server with Ctrl+C.

On the creator's Windows machine, `Start-SkillStrata.ps1` also finds the bundled Codex Node runtime when Node is absent from PATH. Right-click the script and select Run with PowerShell, or run it from an existing PowerShell terminal. It does not change execution policies or install software. If Windows blocks the script, use `node server.mjs` from a terminal where Node is available.

If npm is available, `npm start`, `npm test`, `npm run check` and `npm run build` are equivalent convenience commands. There is no install step.

## Try the experience

1. Select English or Ukrainian, then Begin Discovery.
2. Choose any of the three challenges: production safety, logistics planning or human-centred customer support.
3. Give an initial answer, answer an adaptive clarification, then respond to the changed circumstances. There is no timer or correct-answer score.
4. Compare the initial and Second Perspective responses. Open the constellation, select a node, inspect its exact source and matched phrases.
5. Challenge an interpretation or return to revise an answer. A revision clears that scenario's challenges and regenerates evidence.
6. Open Report, optionally enter an unverified self-claim, review the report preview and download Markdown. Exact responses are excluded by default.

The Insert fictional example button inserts editable test text; it is never represented as the user's own demonstrated experience. Only submitted text becomes a record. Examples contain fictional situations, not personal profiles.

## Verification

```sh
node scripts/check.mjs
node --test tests/engine.test.mjs tests/server.test.mjs
node scripts/build.mjs
```

`check` validates JavaScript syntax; it is **not a TypeScript type check**. `build` copies static assets into `dist`. The source server serves `index.html` and `src` directly. Tests exercise bilingual state transitions, adaptive branches, invalid inputs, evidence provenance, contested records, revisions, persistence, private reports and the HTTP public surface. See `docs/VALIDATION.md` for checks actually executed and known gaps.

## Privacy and responsible use

- Text is processed in the browser with no external AI calls or analytics. No API keys are accepted in browser code.
- Sessions stay in memory by default and disappear on reload. Optional local saving stores answers and correction notes in this browser's localStorage; this storage is not encrypted and is unsuitable for shared computers or sensitive information.
- Delete session removes the app's saved session. Downloaded reports remain on the device and must be deleted separately.
- Browser speech recognition, when enabled by pressing Dictate, may send audio to the browser vendor. Browser permissions are required, availability varies, and Ukrainian speech or voices may be unavailable. Speech synthesis uses browser/OS voices. Dictation never automatically submits an answer. Text entry is always available.
- Use fictional information; do not enter names, addresses, immigration status or other sensitive details.
- Phrase rules can misread context or negation. Their outputs are tentative observations of wording. Statements are not verified behaviour. There are no intelligence, employability or professional-competence scores, protected-characteristic inferences or hiring decisions.

## Source map

`src/scenarios.js`: bilingual scenario data, example responses, six evidence categories and narrow phrase rules.

`src/engine.js`: state transitions, explicit functions, session restoration, evidence corrections, reflections and report export.

`src/adapter.js`: runtime guided adapter and a deliberately disabled server-AI seam. No live AI integration is implemented.

`src/app.js`: accessible HTML controls, chat, voice capability detection, persistence and responsive constellation.

`src/voice.js`: injectable dictation lifecycle controller, including stale-callback protection.

`demo.html` and `src/recorder.js`: live demonstration recorder with a separate fictional session, English cues, optional browser capture and local saving. See `docs/RECORDING.md` for the verified recording limitation.

`src/styles.css`: original visual system using system fonts, CSS and SVG; no external assets or font downloads.

`server.mjs`: dependency-free local HTTP server with an explicit public-file allowlist and security headers.

`docs`: architecture, Devpost draft, demo script, feedback template, genuine friction log, validation and remaining submission work.

## Future AI integration

A real backend remains a separate milestone requiring the creator's permission for provider choice and spending. Implement a server-side adapter, hold secrets in server environment variables, validate tool calls and quote provenance, enforce the same state-machine rules, disclose transmission and retain clear provider-failure states. The existing `ServerAIAdapter` intentionally throws rather than claiming an integration exists. A ChatGPT subscription is not assumed to include API credits.

## Repository and competition status

The source repository is [valerakusnir630-rgb/VALERII](https://github.com/valerakusnir630-rgb/VALERII). It contains the original SkillStrata source under the MIT license. No session answers, credentials or recordings are included in Git. The Devpost draft has an English description, technology tags, product feedback and a source archive. A usable public video and final submission remain pending. Final eligibility/originality declarations and binding contest terms must be completed by the creator. Current simulation eligibility is based on the official rules reviewed on 12 October 2026; acceptance and judging are not guaranteed. See `docs/SUBMISSION-CHECKLIST.md`.
