---
title: Electric Vehicle
type: device
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [integration, ev, energy]
---

# Electric Vehicle

## Role

The Electric Vehicle provides the EV charging use case in [[Energy Management]]. The vehicle is confirmed; the charging hardware, Homey integration, and exact charging-state signal require verification.

## Required inventory

- Vehicle integration/app and available Homey cards.
- Charger make/model, circuit, meter, and control path.
- Reliable charging start/stop state.
- Charging power/current signals, units, update interval, and unavailable state.
- Manual control and safety boundaries.

## Automation policy

Homey may coordinate battery behavior around charging only after a charging signal is shown to be reliable. Grid import alone may reflect other loads. Do not change charger or vehicle safety limits outside supported manufacturer/installer controls.

## Failure considerations

- Charging starts but Homey misses the event.
- Charging stops but a temporary battery setting is not restored.
- Vehicle/cloud telemetry becomes stale.
- Another large load resembles EV charging.

## Related

[[ADR-005 Protect Storage During EV Charging]] · [[Residential Battery System]] · [[Energy Metering Gateway]]
