---
title: ADR-002 lighting platform for Lighting
type: adr
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [adr, hue, lighting]
---

# ADR-002 — lighting platform for Lighting

## Context

Lighting needs predictable scenes, direct manual operation, and integration with Homey presence/time logic. lighting platform is the established lighting platform in the home.

## Decision

Retain lighting platform as the principal lighting domain. Homey selects intent and scenes; Hue remains responsible for its bridge, devices, and native lighting behavior.

## Rationale

- Avoids an unnecessary platform migration.
- Keeps lighting usable through Hue-native controls where available.
- Separates room-lighting execution from cross-system decisions.

## Constraints

The current repository does not contain a verified Hue device/scene inventory. Lux thresholds, brightness levels, and transitions remain room-specific verification items.

## Consequences

- Homey flows should target stable Hue scenes or explicit devices, not undocumented assumptions.
- Native and Homey automations must be reviewed for duplicate triggers.
- Device replacement and naming follow [[Naming Standards]].

## Related

[[Lighting]] · [[Lighting Platform]] · [[Integration Roles]]
