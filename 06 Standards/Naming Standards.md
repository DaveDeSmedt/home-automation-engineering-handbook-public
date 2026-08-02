---
title: Naming Standards
type: standard
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [standard, naming, homey]
---

# Naming Standards

## Canonical rooms

Use the titles in [Zone Design](../02%20Rooms/Zone%20Design.md). Do not collapse Entry Corridor and Transition Corridor into `Hallway`, or the Living Transition, Dining Zone, and Lounge Zone into a single automation zone.

## Devices

Pattern: `<Platform> <Room> <Function> [Number]`

Examples: `multi-room audio Study`, `SB Transition Corridor Presence`, `Hue Kitchen Ceiling 01`. Copy existing production names exactly before renaming; a rename can affect screenshots, maintenance, and user familiarity.

## Flows

Pattern: `<ID> <Room/Domain> — <Outcome>`

Examples: `A-001 Study to Bathroom — Handover`, `E-001 EV Charging — Protect Battery`.

## Variables

Pattern: `<Domain>_<Meaning>` using consistent English words and case.

Examples: `Audio_Current_Room`, `Audio_Previous_Room`, `Audio_FollowMe`.

## Scenes and scripts

- Scene: `<Room> — <Intent>` such as `Bathroom — Night`.
- Script: `<Domain> — <Action>` such as `Audio — Reconcile Session`.

## Rules

- Names describe function, not temporary implementation.
- Avoid punctuation that is difficult to search or type.
- Keep one spelling for each room and state value.
- Number only where multiple physical devices need distinction.
- Record aliases during migration; remove them after dependent flows are checked.
