---
title: Variables
type: implementation
status: pattern
revision: 2.1
audience: public
last-reviewed: 2026-09-30
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

## House-context variables (reference home)

| Variable | Values | Owner | Readers |
|---|---|---|---|
| `House_State` | `Awake`, `Sleep`, `Away`; `Unknown` only until recovery after a restart | House-state flow | Lighting, ventilation, coverings |
| `Time_Of_Day` | `Morning`, `Day`, `Evening`, `Night` | Time-of-day flow | Lighting scenes and brightness |
| `<Zone>_Target_Room_Light` | lux per zone, set per period | Time-of-day flow | Lighting flows |

The owning flows perform no device actions; they only maintain state. After a restart the house-state flow waits briefly, then resolves `Unknown` to `Away` or `Awake` from presence.

**Lesson: one vocabulary.** The reference home once had both `Home` and `Awake` meaning "someone is here". Consumers that checked only one of them silently did nothing. Keep one value per meaning and list the allowed values here.

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

[Variable Template](../../10%20Templates/Variable%20Template.md) · [Stateful Automation Architecture](../../01%20Architecture/Stateful%20Automation%20Architecture.md) · [Follow-Me Audio](../../03%20Systems/Audio/Follow-Me%20Audio.md)
