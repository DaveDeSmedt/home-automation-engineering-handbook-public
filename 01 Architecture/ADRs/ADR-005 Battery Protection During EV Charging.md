---
title: ADR-005 Battery Protection During EV Charging
type: adr
status: proposed
revision: 2.0
audience: public
last-reviewed: 2026-07-10
tags: [adr, energy, ev, battery]
---

# ADR-005 — Battery Protection During EV Charging

## Context

EV charging can create a large household load. The design intent is to avoid unintended battery discharge or an undesirable reserve change while the Tesla charges.

## Decision

Use a Homey flow to recognize a verified EV-charging condition, apply a temporary EcoFlow protection/reserve target, and restore the previous target after charging ends.

## Status

**Proposed/partially verified.** Earlier drafts mention a high-import threshold and temporary reserve values, but the repository contains no exported flow or acceptance result. Those values must not be treated as production facts.

## Required safeguards

1. Confirm charging from a reliable signal, not grid import alone.
2. Save the prior setting before changing it.
3. Apply bounded target values supported by the device integration.
4. Restore on normal completion, cancellation, restart, and timeout.
5. Notify only when restoration fails or state is ambiguous.

## Consequences

- The flow adds state and recovery obligations.
- A false charging detection can unnecessarily change battery behavior.
- A missed stop event can leave the reserve at the temporary value.

## Related

[[Energy Management]] · [[Electric Vehicle]] · [[Flow Catalogue]]
