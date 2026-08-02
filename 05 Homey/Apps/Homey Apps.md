---
title: Homey Apps
type: inventory
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [homey, apps, inventory]
---

# Homey Apps

## Purpose

automation platforms are the integration layer between Homey and device platforms. A public handbook should describe the required role and evidence boundary, not list a private app inventory, publishers, permissions or account connections.

## Inventory table

| Domain | Integration role | Evidence to record privately | Local or cloud behaviour | Verification |
|---|---|---|---|---|
| Lighting | lighting platform | Unknown | Unknown | Required |
| Presence | presence platform | Unknown | Unknown | Required |
| Audio | multi-room audio | Confirmed through available cards; version unknown | Unknown | Partial |
| Energy storage | residential battery platform | Unknown | Unknown | Required |
| Energy telemetry | metering gateway | Unknown | Unknown | Required |
| Vehicle | electric vehicle | Unknown | Unknown | Required |

## Change procedure

Before updating/removing an app: review release notes, back up Homey, inventory affected devices/cards, capture critical flows, and define rollback. Afterward, test device availability, trigger/action cards, variables, and one representative flow per subsystem.

## Privacy

Do not record tokens or account credentials. Record permission purpose, connection purpose and recovery process instead.

## Related

[Firmware](../../07%20Operations/Firmware.md) · [Backups](../../07%20Operations/Backups.md) · [Integration Roles](../../01%20Architecture/Integration%20Roles.md) · [Flow Catalogue](../Flow%20Catalogue.md)
