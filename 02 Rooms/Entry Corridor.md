---
title: Entry Corridor
type: room
status: proposed
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [room, hallway, transition]
---

# Entry Corridor

## Role

Primary junction at the front door. It connects bidirectionally to [Guest WC](Guest%20WC.md), [Kitchen](Kitchen.md), and [Transition Corridor](Transition%20Corridor.md).

## Coverage

A presence sensor is planned. No audio endpoint is recorded; the room should normally be treated as a transition space rather than an audio destination.

## Requirements

- Fast, safe entry lighting with manual fallback.
- Route evidence must expire quickly enough to avoid stale movement conclusions.
- Door/security behavior must not expose sensitive details in public documentation.
- Future sensor placement should distinguish entry, Kitchen travel, and Transition Corridor travel as reliably as practical.

## Verification required

Door contact, lighting, sensor model/position, coverage, vacancy delay, and notification behavior.

## Related

[Transition Corridor](Transition%20Corridor.md) · [Presence Intelligence](../03%20Systems/Presence/Presence%20Intelligence.md) · [Zone Design](Zone%20Design.md)
