---
title: Energy Metering Gateway
type: device
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [integration, metering, energy]
---

# Energy Metering Gateway

## Role

The Energy Metering Gateway provides household/grid energy telemetry used by the energy design. It is a measurement input, not an authority for billing or electrical safety.

## Required verification

- Exact model, firmware, meter interface, location, and network path.
- automation platform/device name and available measurements.
- Units, import/export sign convention, update interval, precision, and unavailable behavior.
- Whether data is local, cloud-assisted, or both.

## Integration rules

- Normalize units before thresholds or calculations.
- Test import and export with known conditions.
- Apply persistence/hysteresis so transient readings do not trigger disruptive actions.
- Distinguish stale/unavailable telemetry from a valid zero.
- Record the exact signal used for EV or battery decisions.

## Related

[Energy Management](../../03%20Systems/Energy/Energy%20Management.md) · [Residential Battery System](../Residential%20Battery%20System/Residential%20Battery%20System.md) · [Flow Catalogue](../../05%20Homey/Flow%20Catalogue.md)
