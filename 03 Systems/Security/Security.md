---
title: Security
type: system
status: proposed
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [system, security, safety, privacy]
---

# Security

## Scope

Security documentation covers detection, notification, manual response, privacy, and graceful failure. The repository does not yet contain a verified alarm, camera, smoke, leak, or door-sensor inventory.

## Principles

- Homey convenience automation is not a certified alarm or life-safety system.
- Smoke, CO, electrical, and fire protection follow applicable device/manufacturer guidance.
- Critical alerts use explicit severity, destination, retry, and acknowledgement rules.
- Presence must not be treated as identity or authorization.
- Avoid storing access codes, camera URLs, tokens, exact security placement, or response secrets in Git.
- Manual egress and basic room operation remain available during outages.

## Required design records

| Area | Record |
|---|---|
| Perimeter | Doors/windows, state source, failure behavior |
| Environmental | Smoke, CO, heat, water, battery-area conditions |
| Occupancy modes | Home, away, sleeping, guest, vacation—only if implemented |
| Notifications | Severity, recipients, fallback, acknowledgement |
| Recovery | False alarm reset, device failure, Homey/network outage |

## Acceptance

Test alerts end to end without creating unsafe conditions. Confirm device-local alarms work independently of Homey where expected.

## Related

[Notifications](../Notifications/Notifications.md) · [Network Topology](../../01%20Architecture/Network%20Topology.md) · [Recovery](../../07%20Operations/Recovery.md) · [Entry Corridor](../../02%20Rooms/Entry%20Corridor.md)
