---
title: Notifications
type: system
status: proposed
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [system, notifications, operations]
---

# Notifications

## Objective

Deliver the right information to the right channel with enough context to act, without turning normal automation noise into alerts.

## Severity model

| Severity | Meaning | Expected treatment |
|---|---|---|
| Critical | Immediate safety/property risk | Independent local alarm where applicable plus urgent remote notification |
| High | Automation left in an unsafe or costly state | Prompt notification with exact recovery action |
| Advisory | Maintenance or degraded service | One concise notification, rate limited |
| Informational | Normal completion/state change | Usually dashboard/log only |

## Message standard

Include system, affected room/device, observed condition, timestamp, action already attempted, and the next human action. Never include secrets.

## Routing principles

- Presence may help route non-critical announcements, but must not suppress critical alerts.
- multi-room audio/independent audio endpoint speech routing is unverified and must respect quiet hours and media activity.
- Deduplicate repeated events and define an acknowledgement/reset path.
- A notification is not a substitute for reconciliation or local safety behavior.

## Verification queue

Inventory active Homey notification cards, mobile recipients, speaker announcements, escalation delays, and offline failure behavior.

## Related

[[Security]] · [[Troubleshooting]] · [[Audio]] · [[Flow Catalogue]]
