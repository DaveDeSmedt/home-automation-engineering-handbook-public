---
title: Presence Detection
type: system
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [system, presence, inputs]
---

# Presence Detection

## Purpose

Provide room and transition-state inputs for automation. Presence indicates that a sensor reports occupancy; it does not identify a person or prove movement direction by itself.

## Current coverage

| Location | Status | Automation role |
|---|---|---|
| [Dressing Area](../../02%20Rooms/Dressing%20Area.md) | Current | Destination presence |
| [Bathroom](../../02%20Rooms/Bathroom.md) | Current | Destination presence |
| [Study](../../02%20Rooms/Study.md) | Current | Destination presence |
| [Lounge Zone](../../02%20Rooms/Lounge%20Zone.md) | Current | Destination presence; open-plan overlap to test |
| [Transition Corridor](../../02%20Rooms/Transition%20Corridor.md) | Current | Transition evidence |
| [Entry Corridor](../../02%20Rooms/Entry%20Corridor.md) | Planned | Transition evidence |
| [Kitchen](../../02%20Rooms/Kitchen.md) | Two planned | Combined logical occupancy to design/test |
| [Exercise Area](../../02%20Rooms/Exercise%20Area.md) | Planned | Destination presence |

## Sensor validation record

For each device record model, native name, Homey name, mounting position, field of view, detection latency, clear delay, false positives, blind spots, firmware, and observed outage behavior.

## Rules

- Do not equate presence with identity.
- Do not clear a room solely because another room became active when multiple occupants are possible.
- Expire hallway route evidence.
- Treat sensor unavailability separately from an empty room.
- Use conservative vacancy behavior for lighting and disruptive audio actions.

## Pattern: distinguish stale reporting from logic faults

Before changing automation logic, check when the sensor last reported, its
current value, communication state, and battery health. Battery reseating or
replacement can be a diagnostic step after observation, not a universal fix.

Avoid treating a bed sensor as a definitive “person left bed” signal. Overnight
interruptions have many benign causes; any consequential action needs
conservative timing, manual fallback, and explicit acceptance evidence.

## Related

[Presence Intelligence](Presence%20Intelligence.md) provides the broader textbook model. [Presence Sensor Platform](../../04%20Devices/Presence%20Sensor%20Platform/Presence%20Sensor%20Platform.md) owns device-family details. [Zone Design](../../02%20Rooms/Zone%20Design.md) records deployment.
