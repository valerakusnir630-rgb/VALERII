# Architecture

## Runtime and design choice

Node 24 was available on the creator's Windows computer, while React, Vite, TypeScript and npm were not on the inspected command path. This MVP uses browser ES modules and a Node standard-library server. That choice avoids dependency installation and external services while preserving separate scenario data, a pure engine, an adapter and a UI. There is no TypeScript compiler, bundler, database or live language model.

## Multi-step workflow

```text
Welcome / language / privacy
           |
 get_scenario → initial response
           |
 collect_evidence → choose_clarification → update_state
           |
 clarification response → introduce_second_perspective
           |
 changed-context response → collect_evidence → generate_reflection
           |
 constellation / corrections / revisions / report
```

The guided adapter actually calls engine functions at runtime. The engine records a bounded tool trace. After the first answer, a deterministic policy checks whether the scenario's primary category has a phrase observation. If missing, it selects a focused clarification; otherwise it asks about unknowns. Both branches lead to a meaningful changed circumstance and a third answer. This is stateful policy orchestration, not autonomous generative reasoning. Session memory includes each scenario's responses, stage, original clarification and contested interpretations.

## Evidence model

An evidence record contains a stable scenario/answer/category ID, stage, full exact response, matched substrings, bilingual tentative interpretation, observed/contested status and optional user correction. Six categories cover safety, technical reasoning, planning, communication, empathy and adaptability. These deliberately narrow categories do not claim a comprehensive ability map.

The constellation derives illuminated nodes from unchallenged observations. Connections represent categories observed in the same response. Counts describe records, not ability strength. Selecting a node reveals sources and uncertainties. Disputed records remain visible and are excluded from the reflection's observed count. Revising an answer replaces stale evidence and clears disputes for review. The original clarification is retained because it documents the question actually answered.

## Boundaries

Self-reported claims are separate from phrase observations. The application cannot verify real actions, infer competence or establish real-world transfer. Keyword rules can misunderstand negation and intent. Unknown categories remain unknown; there is no negative scoring. Before/after responses are presented verbatim rather than claiming the engine understands improvement.

Text processing and session state are browser-local. Optional persistence stores only this app's session. Loading reconstructs derived evidence instead of trusting persisted evidence objects. UI rendering escapes text. The local server only exposes the index and named source modules/styles; environment files, Git metadata, docs and tests are outside the public surface.

## AI extension contract

`GuidedDemoAdapter.begin(session, scenarioId)` and `.respond(session, text)` expose a session, next prompt and completed reflection. The reserved `ServerAIAdapter` currently rejects calls. A future implementation needs a same-origin server endpoint, server-only provider credentials, explicit user consent for external transmission, output schemas, quoted-source checks, tool allowlists, input limits, timeouts, error handling and provider integration tests. No such backend is claimed in this release.

## Accessibility and motion

Native form labels, buttons, language selection, dialog focus containment, focus indicators, skip link, text alternatives for map nodes, responsive CSS and reduced-motion support are included. Speech is optional. Keyboard and assistive-technology verification beyond the recorded browser checks remains on the checklist.
