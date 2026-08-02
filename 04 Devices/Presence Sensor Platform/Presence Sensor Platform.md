---
title: Presence Sensor Platform
type: device-domain
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [integration, presence]
---

# Presence Sensor Platform

## Role

presence platform devices provide current or planned presence inputs for room and transition logic.

## Confirmed deployment

- Illustrative teaching zones: Study, Bathroom, Dressing Area, Lounge Zone and Transition Corridor.
- Additional zones can be added only after local coverage testing.

## Required per-device record

- Exact model and firmware.
- Native device name and Homey device name.
- Room, mounting position, orientation, and coverage.
- Presence-active and presence-clear Homey cards.
- Detection latency, clear delay, blind spots, false positives, and unavailable-state behavior.
- Hub/cloud dependency where applicable.

## Limitations

Presence does not identify a person. Multiple active rooms may be valid. A stale or unavailable sensor must not be silently treated as an empty room.

## Related

[Presence Detection](../../03%20Systems/Presence/Presence%20Detection.md) · [Presence Intelligence](../../03%20Systems/Presence/Presence%20Intelligence.md) · [ADR-003 Use Dedicated Presence Inputs](../../01%20Architecture/ADRs/ADR-003%20Use%20Dedicated%20Presence%20Inputs.md)
