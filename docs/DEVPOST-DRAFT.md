# SkillStrata: Unearthing Invisible Talent

## Inspiration

People often describe themselves through job titles or credentials, yet those labels leave much of their reasoning invisible. SkillStrata explores a different question: what can a person show through the choices they describe, and which conclusions should remain unknown?

## What it does

SkillStrata is an English/Ukrainian reflection experience with three complete fictional challenges: production safety, delivery planning and customer support. Each includes an initial response, a clarification selected from that response, changed circumstances and a Second Perspective response. The comparison makes the evolution of the person's stated reasoning inspectable.

The Evidence Constellation connects observations to exact responses. Users can inspect matched phrases, contest an interpretation or revise their own answer. A personal report distinguishes unverified claims, observations, uncertainties and further practice. Export omits personal text by default.

## How we built it

The current version uses JavaScript ES modules, CSS, SVG and a dependency-free Node.js HTTP server. A deterministic guided adapter calls explicit scenario, evidence, state and reflection functions. Session memory keeps progress across challenges and optionally across browser reloads. Browser speech recognition and synthesis are optional enhancements with a text fallback.

**Track positioning:** this is an independent Alexa+-style simulated experience, using our own stateful policy workflow. It is a non-generative demo. It is not connected to official Alexa+, does not use a live AI provider and is not an MCP implementation. A server-AI adapter seam exists but remains deliberately disabled until a provider is configured and tested.

## What makes it different

Second Perspective changes the problem instead of asking another generic interview question. The constellation represents source-linked observations rather than unsupported talent scores. Users own the interpretation: disagreement remains visible, and corrections change the record.

## Challenges and lessons

The available runtime had Node.js but no framework toolchain on PATH. We built a maintainable modular MVP without dependency downloads. Phrase matching is limited; the product exposes this limitation directly and makes every observation challengeable. A session restoration issue found during development was corrected so revisions retain the historical clarification.

## What we verified

See `VALIDATION.md` for executed tests and browser checks. No user research, live voice-provider success, Amazon connection or generative backend validation is claimed.

## What's next

Test with consenting users using fictional data; improve accessibility with assistive-technology testing; integrate a server-side AI provider only with approval; evaluate interpretations against user corrections. This is a reflection and learning tool, not a hiring system, qualification or validated psychological assessment.

## Submission fields to fill

- Creator/team and GitHub URL: pending creator input and publication approval.
- Demo video URL: pending recording and upload approval.
- Primary track: Alexa+ simulated experience.
- Mini challenges: none claimed in this version.
- Product feedback: complete the separate template from genuine experience.
