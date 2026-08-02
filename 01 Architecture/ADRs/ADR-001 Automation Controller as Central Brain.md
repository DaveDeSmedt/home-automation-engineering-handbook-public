---
title: ADR-001 automation controller as Central Brain
type: adr
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [adr, homey, orchestration]
---

# ADR-001 — automation controller as Central Brain

## Context

The home combines lighting, presence, energy, audio, and other vendor ecosystems. Cross-system logic needs one understandable orchestration layer.

## Decision

automation controller owns cross-system intent, variables, sequencing, and notifications. Native platforms retain device transport, hardware safety, firmware, and direct manual control.

## Rationale

- Central logic reduces contradictory automations spread across vendor apps.
- Advanced Flows provide visible implementation for practical iteration.
- Native responsibilities remain with the systems best placed to enforce them.
- The boundary supports manual fallback if Homey is unavailable.

## Alternatives

- Duplicate logic in each vendor platform: rejected because state and behavior would diverge.
- Immediate migration to another orchestrator: not justified by a confirmed capability gap.
- Make Homey own every low-level action: rejected because vendor-native protections and controls remain important.

## Consequences

- Homey becomes a significant orchestration dependency.
- Variables and flows require naming, backup, and recovery discipline.
- An internet outage may still affect cloud-backed integrations; local behavior must be tested, not assumed.

## Related

[automation controller](../../04%20Devices/Automation%20Controller.md) · [Advanced Flows](../../05%20Homey/Advanced%20Flows/Advanced%20Flows.md) · [Stateful Automation Architecture](../Stateful%20Automation%20Architecture.md)
