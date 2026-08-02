---
title: Troubleshooting
type: operation
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [operations, troubleshooting, diagnostics]
---

# Troubleshooting

## First response

1. Preserve safety and restore manual control.
2. Stop repeated/disruptive automation with the smallest available disable switch.
3. Record time, room, devices, expected behavior, observed behavior, and recent changes.
4. Check whether the fault is sensor, state, Homey flow/app, network/cloud, native platform, or device.
5. Change one variable at a time and retest.

## Diagnostic order

| Layer | Checks |
|---|---|
| Physical | Power, cabling, batteries, local controls, environmental condition |
| Native platform | Device online, native action succeeds, group/mode/state correct |
| Network/cloud | LAN reachable, internet/cloud dependency understood |
| automation platform/device | Device available, cards still present, state current |
| Flow | Trigger fired, guards true, actions ordered, delay/timeout reasonable |
| Variables | Allowed values, writer, staleness, device reconciliation |

## Common patterns

- **Nothing happens:** verify trigger history and guard state before changing actions.
- **Action partly succeeds:** test each native/Homey action independently and inspect ordering.
- **Repeated execution:** add a lock/cooldown or make actions idempotent.
- **Wrong room/state:** compare variables with sensors/devices; expire stale route evidence.
- **Temporary setting remains:** run recovery, restore prior value, and add timeout/restart handling.

## Escalation

Electrical, battery, fire, security, or manufacturer-safety concerns go to the appropriate qualified service channel. The handbook is not a substitute for professional diagnosis.

## Related

[Recovery](Recovery.md) · [Incident Template](../10%20Templates/Incident%20Template.md) · [Verification Standards](../06%20Standards/Verification%20Standards.md)
