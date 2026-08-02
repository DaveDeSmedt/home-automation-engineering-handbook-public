---
title: Climate
type: system
status: proposed
revision: 2.0
audience: public
last-reviewed: 2026-07-10
tags: [system, climate, humidity, ventilation]
---

# Climate

## Objective

Maintain comfort and protect the building/equipment while keeping life-safety and appliance controls within manufacturer and installer requirements.

## Known themes

Earlier project context mentions humidity, ventilation, basement conditions, heating/heat-pump considerations, and future room-aware comfort. Exact installed devices and control points are not verified in the repository.

## Control hierarchy

1. Manufacturer and qualified-installer safety controls.
2. Frost, over-temperature, condensation, and ventilation protections where installed.
3. Manual occupant settings.
4. Scheduled comfort and setback.
5. Presence-aware optimization after sensor reliability is proven.

## Required inventory

- Heat source, thermostats, zones, floor heating, ventilation, and heat-pump interfaces.
- Temperature and humidity sensors with observation location.
- Windows/doors that affect control.
- Basement/battery environmental constraints.
- Manual overrides and emergency behavior.

## Automation rules

- Use hysteresis and minimum run/off times where equipment requires them.
- Never replace life-safety or equipment safety controls with Homey logic.
- Distinguish sensor fault from valid extreme readings.
- Do not heat/cool a room solely from a transient presence event.
- Record units and calibration assumptions.

## Related

[[Basement]] · [[Bathroom]] · [[Maintenance]] · [[Verification Standards]]
