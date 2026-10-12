# Genuine development friction log

## F01 — Framework tools absent from command path

- Date: 12 October 2026.
- Task: inspect Windows development environment and start a runnable application.
- Steps: queried Node, npm, Git, Python and ripgrep commands; inspected bundled dependency paths.
- Expected: a usable framework toolchain.
- Actual: Node 24.19.0 and ripgrep were available on PATH; npm, Git and Python did not resolve there. Bundled Git and other runtimes were found through the workspace dependency tool. React, Vite and TypeScript were absent from the inspected package directory.
- Severity: medium.
- Workaround: dependency-free ES modules and Node HTTP server; direct Node test/check/build commands.
- Suggestion: provide a documented runtime inventory and consistent command path for frontend projects.
- Attribution: local environment friction, not an Amazon developer-tool defect.

## F02 — Browser control startup delay

- Task: open localhost in the Codex in-app browser for verification.
- Steps: opened the running local server with the browser tool.
- Expected: immediate initial state.
- Actual: the initial call took approximately 482 seconds before returning the correct page. Subsequent interactions responded normally.
- Severity: medium.
- Workaround: reused the successful tab; no browser reinstall or system changes.
- Suggestion: report progress or a bounded initialization timeout.
- Attribution: verification tooling, not application load-time measurement or Amazon API friction.

## F03 — Revised answer could alter historical clarification on restore

- Task: maintain correct evidence and question history after revisions.
- Steps: reviewed restoration logic following browser revision verification.
- Expected: restored conversation retains the clarification originally answered.
- Actual: reconstructing state from a revised initial answer could select a different clarification branch.
- Severity: medium.
- Workaround: retain the validated original clarification field on restore; added regression coverage.
- Suggestion: persist the historical question alongside any future generated prompt.
- Attribution: prototype implementation bug; corrected locally.

No gated Alexa+ tools were attempted. No Amazon SDK/API error, paid-provider failure or third-party user feedback is claimed.

## F04 — Screen capture produced black video

- Task: record a functioning browser demo under three minutes.
- Steps: built a real getDisplayMedia/MediaRecorder flow; passed through the app, evidence corrections, language switching and private report; saved and played the WebM.
- Expected: readable footage of actual application operation.
- Actual: a roughly 2:32 video decoded without media error but displayed black frames. Its 3438×1440 capture surface did not show the application.
- Severity: high for submission preparation.
- Workaround: reject the clip; add a first-frame warning, request a browser surface and prepare recording in an ordinary browser. A usable final video is still pending.
- Suggestion: expose supported capture surfaces and validate image content before a long recording.
- Attribution: screen-capture environment/tooling; no Amazon recording-tool defect is claimed.

## F05 — Browser sign-in and connector authentication differ

- Task: publish the repository and prepare a Devpost entry.
- Steps: retrieved the connected GitHub profile and available repositories; opened GitHub's new-repository page and Devpost.
- Expected: an authenticated publishing route.
- Actual: the connector recognised the account, but no accessible repositories were returned and no repository-creation tool was available. Browser pages required sign-in.
- Severity: medium.
- Workaround: prepare the source, CI and submission fields locally; request creator sign-in without asking for passwords in chat.
- Suggestion: make the distinction between connector access and browser authentication clear.

## F06 — Recorder blocked by the application security policy

- Task: embed the app and play a captured blob video in the recorder.
- Actual: the initial policy forbade all framing and did not permit blob media.
- Workaround: allow only same-origin framing and same-origin/blob media. Cross-origin framing remains blocked. Added server coverage for the intended public surface.
- Attribution: implementation error corrected during development.
