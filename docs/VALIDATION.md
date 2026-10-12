# Executed validation — 12 October 2026 (updated after submission-preparation work)

## Automated checks

Executed with Node.js 24.19.0 on the creator's Windows computer:

- Final `node scripts/check.mjs`: passed, checking **16 JavaScript modules**. This is syntax validation, not a TypeScript type check.
- Final complete run: **21 tests passed, 0 failed** across engine, server, voice, recording, accessibility and capture-check suites.
- `node scripts/build.mjs`: passed, static assets created in `dist`.
- Local server startup: successful at http://127.0.0.1:4173.

Tests cover all three scenarios in both languages; exact evidence sources; adaptive clarification; invalid transitions; absence of invented evidence; constellation connections derived from shared answers and removed when contested; correction restoration; stale-quote removal after revisions; independent scenario resumption; corrupted/versioned sessions; preservation of historical clarification; private report redaction; incomplete reflections; explicit adapter modes; public HTTP routes and blocked private-file/mutation routes.

## Browser checks actually performed

In the Codex in-app browser, using fictional example text:

- Welcome → Begin Discovery → production challenge in English.
- Initial answer → clarification → changed circumstances → completed reflection.
- Inspect constellation → exact source and matched words.
- Contest a record with a correction → observed count changed from nine to eight.
- Review and revise an answer → updated exact quote and regenerated observations.
- Switch interface language to Ukrainian.
- Complete logistics and customer-support scenarios in Ukrainian → three completed scenarios.
- Report preview: a fictional private claim and exact response text were absent by default.
- Download button produced an actual `skillstrata-uk-private.md` file in the browser download directory.
- Optional local save → reload → all three completed scenarios restored.
- Constellation at a 390×844 viewport: no horizontal document overflow; visual inspection showed stacked map and evidence panel.

The desktop constellation screenshot is a capture of the running application with fictional responses, not an image mockup. Browser tooling had lengthy startup/download delays; those are not application performance measurements.

## Follow-up checks

- Activated the skip link with Enter; focus moved to `main`.
- Used Tab and Enter to begin discovery, open the production scenario and submit a typed fictional response; the next textarea received focus.
- DOM inspection found no unlabelled input, textarea or select elements on the inspected welcome and active-scenario screens.
- App-rendered diagnostics confirmed speech recognition and synthesis APIs are available in the in-app browser. A read-only inspection scope did not expose those globals, so its earlier negative readings were not used as browser capability evidence.
- Voice lifecycle tests simulate unsupported APIs, Ukrainian language selection, transcript delivery, permission denial, startup failure and stale events after abort. They do not test microphone hardware or successful external speech recognition.
- The audited solid palette/background pairs had a minimum text contrast of 6.08:1. This is a palette audit, not full WCAG certification.
- A real MediaRecorder session ran for approximately 2:32 and produced a valid, decodable WebM file. Actual playback showed black frames. It is a **failed recording**, not a submission-ready video, and was moved to intermediate work storage.
- A subsequent browser-surface-preference capture also showed a black first frame. The newly added warning correctly rejected it. Neither clip is offered as a usable demo video. A first-frame check cannot prove later frames are correct or free of private data.
- The recorder's embedded app initially failed because the server prohibited all framing. Same-origin framing was enabled, while cross-origin framing remains blocked.
- Blob video preview was added to the content security policy. The local recording endpoint checks origin, size, MIME and container signature, and writes only to a fixed ignored directory.

## Verification limits

No successful live microphone/provider interaction or real Ukrainian voice availability was verified. Screen-reader testing, a complete keyboard-only journey, full rendered contrast audit, phone hardware and wider browser coverage remain open. No load benchmark, live AI provider, Amazon integration, deployment or actual user feedback was tested. A usable contest video and external publication remain pending.
