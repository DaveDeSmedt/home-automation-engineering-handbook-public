---
title: HomeyScript
type: implementation
status: proposed
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [homey, script, implementation]
---

# HomeyScript

## Use policy

Use HomeyScript when logic is difficult to express, test, or maintain in Advanced Flow—not merely to make a small flow look clever. No production script inventory is confirmed in this repository.

## Suitable uses

- Reconciliation across multiple devices/variables.
- Data normalization and validation.
- Reusable selection logic with explicit inputs/outputs.
- Audits or reports that do not alter state by default.

## Requirements for every script

- Purpose, owner, status, revision, and dependencies.
- Inputs, outputs, valid values, and units.
- Read-only versus mutating behavior.
- Timeout/error handling and idempotency.
- Logging that excludes secrets and personal data.
- Test cases and rollback/recovery.

## Guardrails

- Validate device/app availability before use.
- Never embed tokens or credentials.
- Prefer explicit targets over toggles.
- Do not let a script become a hidden second source of truth.
- Keep a readable Advanced Flow wrapper that shows when and why the script runs.

## Candidate future use

A generalized audio transfer service may become useful after pairwise multi-room audio flows are proven. Until then, [[Follow-Me Audio]] should remain a small Advanced Flow pilot.

## Related

[[Advanced Flows]] · [[Stateful Automation Architecture]] · [[Flow Catalogue]]
