---
title: Advanced Flows
type: implementation
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [homey, advanced-flow, implementation]
---

# Advanced Flows

## Role

Advanced Flows implement visible cross-system logic in Homey. This page defines implementation rules; [Flow Catalogue](../Flow%20Catalogue.md) records individual automation status.

## Flow structure

Every operational flow should expose:

1. a precise trigger;
2. guards for enable state, source state, destination state, quiet/manual modes, and device availability;
3. ordered actions with explicit delays;
4. state updates after successful device actions;
5. a timeout or recovery branch where temporary state can persist;
6. an acceptance record and last test date.

## Design rules

- Prefer explicit `set on/off` or target values over toggles.
- Keep one purpose per flow or clearly labeled group.
- Name cards, zones, and connectors so screenshots remain understandable.
- Avoid crossing connectors and unexplained long delays.
- Use variables only for durable meaning, not as substitutes for every event.
- Treat unavailable telemetry as an error/unknown state, not as zero or false.
- Do not change production behavior while documenting it.

## Practical workflow

1. Duplicate or back up the current flow.
2. Build one direction/use case.
3. Test normal behavior and one failure path.
4. Record exact cards and observed result.
5. Only then generalize or duplicate to more rooms.

## Review checklist

- Does manual control still work?
- Can the flow fire twice concurrently?
- What happens after Homey restart?
- What happens when a device is offline?
- Are temporary settings restored?
- Does the stored state match the real device state?
- Is there a simple disable switch?

## Related

[Flow ID Standards](../../06%20Standards/Flow%20ID%20Standards.md) · [Variables](../Variables/Variables.md) · [Stateful Automation Architecture](../../01%20Architecture/Stateful%20Automation%20Architecture.md) · [Flow Template](../../10%20Templates/Flow%20Template.md)
