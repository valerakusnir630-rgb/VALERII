# Product feedback — observed development experience

This records developer experience from this implementation. No user-study feedback or Amazon API experience is invented.

## Node.js 24.19.0

Use: local HTTP server, pure challenge engine tests, syntax checks and static build.

Onboarding: Node was available from the bundled Codex runtime. A standard-library server required no dependency installation. Direct `node` commands worked even though npm was not on the inspected PATH.

Worked well: the built-in test runner exercised bilingual scenarios, evidence provenance, revisions, private exports and server boundaries. Pure engine modules ran in both Node and the browser.

Needs work: the surrounding Windows tool path was inconsistent, requiring discovery of the bundled Git executable. This was environment friction, not a Node defect.

Would build with it again: yes, for a small local prototype with explicit modules and reproducible tests.

## Browser DOM, CSS and SVG

Use: bilingual UI, responsive chat and an evidence graph derived from shared source responses.

Worked well: native inputs, labelled controls, dialogs and keyboard activation supported the main journey. The 390 px layout avoided horizontal overflow. The audited palette exceeded 4.5:1 text contrast on the defined backgrounds.

Needs work: rebuilding DOM on navigation originally lost focus. Programmatic focus management was added. A full screen-reader and wider-device audit is still needed.

Would build with it again: yes, while retaining semantic controls and continuing accessibility testing.

## Web Speech APIs

Use: optional dictation and spoken prompts with text fallback.

Observed: the running browser reported both APIs available. Unit tests verified lifecycle handling, unsupported environments, permission-error reporting and rejection of stale callbacks. Successful real microphone recognition was not verified.

Needs work: browser/provider variability and Ukrainian voice availability require testing on the creator's actual speaking setup. API availability alone does not guarantee a working service.

Would build with it again: provisionally, as an optional enhancement with clear transmission disclosure and reliable typing.

## Screen Capture and MediaRecorder

Use: recording actual application operation, English presentation cues and local saving.

Observed: the browser produced and decoded a 2:32 WebM, but playback was black. The clip was rejected for submission use. Same-origin iframe and blob-media policy issues were also found and corrected during recorder setup.

Needs work: a reliable tab capture surface in an ordinary browser. The recorder now requests a browser surface and warns if its first decoded frame is black; the entire video still needs manual review.

Would build with it again: only after validating capture on the target browser. File creation alone is insufficient evidence of a usable video.

## Codex development assistance

Use: source creation, environment inspection, automated verification, local-browser interaction and submission drafts.

Worked well: modular source and deterministic tests were created and executed locally. Browser observations exposed real framing and recording failures.

Needs work: initial browser startup and report-download calls had very long delays. GitHub connector authentication was separate from browser sign-in, and no repository-creation tool was available in this session.

Would build with it again: yes, with explicit verification of claimed results and human completion of authentication and contest declarations.

## Amazon tools and services

No Amazon SDK, runtime AWS service, official Alexa+ connection or live provider API was used. The selected route is the independently implemented simulated experience. No Amazon tool friction, product feedback or mini-challenge integration is claimed.
