---
title: ADR-003 Use Dedicated Presence Inputs
type: adr
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [adr, presence, pattern]
---

# ADR-003 — Use Dedicated Presence Inputs

## Context

Room occupancy is more useful than momentary motion for lighting, audio and comfort. A good design distinguishes the sensor signal from the logical conclusion: the signal says “something may be here”; the automation decides whether a zone should be treated as occupied.

## Decision

Use dedicated presence inputs where sustained occupancy matters. Validate each sensor, its clearance behaviour and its Homey cards before allowing it to cause disruptive automation.

## Rationale

- Presence can support still activities better than a simple motion event.
- Transition-zone inputs can add route evidence without becoming audio destinations.
- The pattern scales from one zone to several zones without requiring person identification.

## Alternatives

Motion-only sensing can be adequate for short-stay spaces. Door contacts, timers and manual controls may also contribute evidence. Choose inputs based on the behaviour required, not product marketing.

## Consequences

- Presence does not identify a person.
- False positives, detection area, exit delay and stale state require local tests.
- Multi-person routing is a separate design problem.

## Related

[Presence Detection](../../03%20Systems/Presence/Presence%20Detection.md) · [Presence Intelligence](../../03%20Systems/Presence/Presence%20Intelligence.md) · [Presence Sensor Platform](../../04%20Devices/Presence%20Sensor%20Platform/Presence%20Sensor%20Platform.md)
