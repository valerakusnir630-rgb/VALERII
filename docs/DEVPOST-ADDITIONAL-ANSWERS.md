# Additional information answers

## Track
Alexa+ simulated experience. No AWS Builder or Open Source mini-challenge claimed.

## New/existing
New application created during this development session on 12 October 2026.

## Feedback 1 — tools and uses
Node.js 24.19.0: dependency-free local HTTP server, syntax checking, automated tests and static build. Browser DOM/CSS/SVG: bilingual conversational UI, responsive layouts, inspectable evidence graph and reports. Web Speech APIs: optional dictation and spoken prompts with text fallback. Screen Capture API/MediaRecorder: live demonstration recording and local saving; current in-app captures produced black video and were rejected. OpenAI Codex: development assistance, source creation, troubleshooting and verification. No Amazon SDK, official Alexa+ connection, AWS runtime service, live AI-provider API or MCP implementation was used. This is the independent simulated-experience route.

## Feedback 2 — what worked
Node's standard library and test runner supported a runnable prototype without dependency installation. Twenty-one tests passed, including bilingual state transitions, source provenance, corrections, persistence, private reports, voice lifecycle and local-server restrictions. Native browser controls supported labelled fields, dialogs, keyboard activation and navigation focus. Browser checks completed all three scenarios, language switching, private report download and session restoration. The 390 px layout avoided horizontal overflow. The defined text palette/background pairs had a minimum contrast ratio of 6.08:1. Explicit quotes and contested records made the rule engine's limitations inspectable.

## Feedback 3 — needs improvement
Voice API availability did not establish successful microphone/provider recognition; Ukrainian voice availability and actual speaking setup remain to be verified. In-app MediaRecorder capture generated decodable but black footage, so a usable public video remains pending; a first-frame warning now exposes this issue. Initial recorder setup also needed same-origin iframe and blob-media policy fixes. Rebuilding UI DOM lost focus until focus management was added. The local Windows command path lacked npm and Git, requiring runtime discovery and direct Node commands. Browser tooling had long startup/download delays. GitHub connector access was separate from browser sign-in and exposed no repository-creation tool. None of these issues are claimed as Amazon SDK/API defects.

## Feedback 4 — onboarding
Inspected the Windows workspace and bundled runtimes, found Node.js 24.19.0, then created a modular dependency-free application served at loopback. Implemented explicit scenario/evidence/state functions before the bilingual UI, three-stage challenges, constellation, corrections, reports and optional voice. Ran syntax, build and meaningful tests, then exercised actual browser journeys. Added a recorder and discovered capture-quality problems through playback rather than accepting file creation as success. Reviewed the official simulation route. No gated Alexa+ developer tools, Amazon device onboarding or paid cloud service setup was attempted.

## Feedback 5 — build again
Yes for Node.js and semantic browser DOM/CSS/SVG: they supported a maintainable local prototype with reproducible tests and transparent state. Provisionally for Web Speech, only as an optional enhancement with a text fallback and provider disclosure. MediaRecorder would be used only after verifying the selected capture surface and full video playback. Codex was useful for implementation and testing, while authentication, personal contest declarations and final video review still require the creator. No opinion based on actual Amazon SDK/device usage is claimed because none was used.

## AI tools used
OpenAI Codex assisted source-code creation, architecture decisions, troubleshooting, automated testing, browser verification and English submission drafts. The application itself uses a deterministic guided workflow and does not call a live AI backend. No ChatGPT/API credits, Amazon model integration or generative runtime behaviour is assumed.

## Creator-only information still needed
Submitter type and organisation (if any), actual country of residence and Canadian province (if relevant), learning-level answer, career-value answer, and truthful eligibility/originality declarations. These values must not be inferred from language, timezone or account name.
