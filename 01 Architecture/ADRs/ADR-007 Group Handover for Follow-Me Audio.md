---
title: ADR-007 Group Handover for Follow-Me Audio
type: adr
status: proposed
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [adr, audio, follow-me, proposed]
---

# ADR-007 — Group Handover for Follow-Me Audio

## Context

Some multi-room audio integrations offer actions to join another player's group and leave the current group. A direct “move playback” action must not be assumed.

## Decision

Where the platform supports it, use a join–verify–leave sequence:

1. confirm the source session and destination guard;
2. join the destination to the source group;
3. wait briefly and verify continuity;
4. remove the source;
5. reconcile stored audio state.

The Study → Transition Corridor → Bathroom route is an illustrative acceptance scenario, not a record of a deployed flow.

## Status

**Proposed.** Test the exact app cards, group behaviour, timing and manual recovery path before enabling an automatic transfer.

## Consequences

- Source and destination may overlap briefly.
- Timing, group leadership and error recovery require observation.
- Multi-person session ownership is not solved by room presence alone.

## Related

[[Follow-Me Audio]] · [[Multi-room Audio Platform]] · [[Flow Catalogue]]
