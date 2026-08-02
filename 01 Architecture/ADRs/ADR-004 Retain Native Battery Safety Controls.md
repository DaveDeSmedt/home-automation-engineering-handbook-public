---
title: ADR-004 Retain Native Battery Safety Controls
type: adr
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [adr, energy, battery, pattern]
---

# ADR-004 — Retain Native Battery Safety Controls

## Context

A battery system may expose reserve, charge or operating-mode controls to an automation platform. Those controls are not a substitute for the manufacturer's battery-management system.

## Decision

Keep native battery management as the safety baseline. Homey may apply bounded, reversible high-level changes only after the exact card, allowed values and restoration behaviour are verified.

## Rationale

- It avoids replacing device-specific protections with incomplete external logic.
- It retains battery safety constraints in the platform designed to enforce them.
- It allows Homey to coordinate energy context without becoming a battery-management system.

## Verification required

- Exact operating-mode behaviour and active configuration.
- Allowed reserve values and restoration behaviour.
- Local versus cloud control path and outage behaviour.

## Consequences

- Energy flows should be reversible and conservative.
- Failure to restore a temporary setting is an operational incident.
- This book does not guarantee battery behaviour beyond what a reader has tested.

## Related

[Energy Management](../../03%20Systems/Energy/Energy%20Management.md) · [Residential Battery System](../../04%20Devices/Residential%20Battery%20System/Residential%20Battery%20System.md) · [ADR-005 Protect Storage During EV Charging](ADR-005%20Protect%20Storage%20During%20EV%20Charging.md)
