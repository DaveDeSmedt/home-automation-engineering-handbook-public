---
title: Variables
type: implementation
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [homey, variables, state]
---

# Variables

## Confirmed design variables for the audio pilot

| Variable | Type | Initial value discussed | Status | Meaning |
|---|---|---|---|---|
| `Audio_Current_Room` | Text | `Study` | Proposed/pilot | Last confirmed multi-room audio destination room |
| `Audio_Previous_Room` | Text | `Study` | Proposed/pilot | Previous confirmed audio room |
| `Audio_FollowMe` | Yes/No | `Yes` | Proposed/pilot | Master enable for automatic handover |

These values were agreed as the pilot design. Confirm that the variables exist in Homey before marking them `verified`.

## Naming and ownership

- Prefix with a stable service domain: `Audio_`, `Lighting_`, `Energy_`, `Presence_`.
- One variable owns one concept.
- Document type, allowed values, initial/recovery value, writers, readers, and reset behavior.
- Update stored state after the corresponding device action succeeds.
- Do not use text values with inconsistent spelling/case.

## Candidate variables requiring verification

Earlier drafts mention battery reserve and room state concepts. Do not create or document them as active until the corresponding flow needs them and their owner is defined.

## Recovery

After restart, reconcile variables with real devices where possible. If state cannot be reconstructed safely, disable the automation or move it to a documented `Unknown` state rather than guessing.

## Related

[[Variable Template]] · [[Stateful Automation Architecture]] · [[Follow-Me Audio]]
