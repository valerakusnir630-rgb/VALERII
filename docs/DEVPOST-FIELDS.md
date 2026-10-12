# Ready-to-copy Devpost fields

Current status: local working app and source are ready. GitHub publication, a usable public video and final submission are not complete. Do not replace pending URLs with invented links.

## Project name

SkillStrata: Unearthing Invisible Talent

## Elevator pitch

A bilingual, evidence-led reflection experience that reveals reasoning through realistic challenges, changed circumstances and a constellation users can inspect, question and revise.

## Primary track

Alexa+ — independently implemented simulated experience.

## Built with

JavaScript ES modules, Node.js, CSS, SVG, browser DOM, Web Speech API (optional), Screen Capture API and MediaRecorder (recording support; capture limitations disclosed).

## Project description

SkillStrata helps people explore reasoning that job titles and conventional CVs can leave invisible. It offers complete English and Ukrainian scenarios involving production safety, logistics and human-centred customer support.

Each journey includes an initial response, a clarification selected by an explicit deterministic policy and Second Perspective: a meaningful change in circumstances. The initial and changed-context responses appear side by side. The application records descriptions, not verified real-world behaviour.

The Evidence Constellation maps tentative wording observations to exact source responses. Connections represent categories observed in the same response. Users can contest an interpretation, add a correction or revise an answer. Contested records remain visible but are excluded from the reflection's observed count. Unverified self-claims and unknown categories remain distinct.

A personal report records scenarios, evidence references, uncertainties and practice suggestions. It excludes exact responses by default. Text processing is local; session saving is optional. Browser speech may use the browser provider and always has a text fallback.

This release is an independent Alexa+-style, non-generative guided simulation. Its adapter calls explicit scenario, evidence, state and reflection functions and maintains session memory. It does not connect to official Alexa+, implement MCP or call a live AI provider. A future server-AI seam is deliberately disabled rather than presented as a completed integration.

The modular JavaScript application runs locally with Node.js and no dependency installation. Twenty-one automated tests passed, covering the challenge engine, evidence sources, corrections, persistence, report privacy, voice lifecycle, server boundaries, recording limits, contrast and black-frame warnings. Browser checks exercised the core journey in both languages and a 390 px layout. Successful live microphone/provider recognition, screen-reader testing and user research remain unverified.

SkillStrata is a learning and self-reflection tool. It does not score intelligence, competence or employment suitability and is not a qualification or validated psychometric assessment. Human potential deserves to be discovered, not filtered out.

## Code repository URL

PENDING — publish to the creator's GitHub account after browser sign-in.

## Demo video URL

PENDING — record a readable real demo in an ordinary browser, review it and upload publicly to YouTube or Vimeo. The in-app screen-capture attempts produced black footage and were rejected.

## Judging/testing instructions

Clone or download the GitHub source. With Node.js 22+ installed, run `node server.mjs` from the project folder and open http://127.0.0.1:4173 on the same computer. No keys or packages are required. Use the fictional example buttons to complete any scenario, inspect and challenge evidence, switch language and export a private report. Run `node --test tests/*.test.mjs` for automated tests. See README and docs/VALIDATION.md for exact checks and limits.

## Product feedback

Copy `docs/PRODUCT-FEEDBACK.md`. It records genuine tool experience and clearly identifies unverified voice/capture outcomes and absent Amazon integrations.

## Friction log

Copy the relevant entries from `docs/FRICTION-LOG.md`. These are local implementation and tooling issues; no Amazon API failures are invented.

## Final fields requiring the creator

Team members/representative, eligibility, originality/ownership declarations and acceptance of binding competition terms must reflect the creator's actual circumstances. No answers are invented here.
