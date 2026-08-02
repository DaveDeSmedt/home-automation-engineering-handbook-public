---
title: ADR-006 Evidence Before Implementation Claims
type: adr
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [adr, evidence, documentation]
---

# ADR-006 — Evidence Before Implementation Claims

## Context

The handbook combines textbook architecture with a changing real installation. Earlier drafts sometimes presented proposed behavior as already implemented.

## Decision

Every implementation claim carries an evidence status. Architecture may be complete while the corresponding flow remains proposed.

## Accepted evidence

- Recorded evidence from a private implementation.
- Screenshots or exports showing exact Homey cards and settings.
- Repeatable acceptance tests with observed results.
- Native-app/device information copied with an observation date.

## Consequences

- Unknown details remain visible rather than being guessed.
- Flow pages include acceptance criteria and test records.
- `verified` is a meaningful state, not a synonym for well-written documentation.

## Related

[Verification Standards](../../06%20Standards/Verification%20Standards.md) · [Publication Audit](../../00%20Home/Publication%20Audit.md) · [Flow Template](../../10%20Templates/Flow%20Template.md)
