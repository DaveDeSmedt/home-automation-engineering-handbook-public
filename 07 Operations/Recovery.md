---
title: Recovery
type: operation
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [operations, recovery, disaster-recovery]
---

# Recovery

## Objective

Restore safe manual operation first, then platform availability, then automation state. Recovery must not blindly replay stale actions.

## Sequence

1. **Stabilize:** disable the smallest affected automation and restore manual/native control.
2. **Observe:** record current device/native state and unresolved temporary settings.
3. **Restore infrastructure:** power, LAN, Homey, bridges/hubs, native platforms.
4. **Restore configuration:** use validated backups only when configuration is actually damaged.
5. **Reconcile:** compare Homey variables with real device/group/mode state.
6. **Test:** one bounded flow per subsystem, including a failure path.
7. **Re-enable:** gradually, monitoring for repeated triggers.
8. **Document:** incident, root cause, corrective action, and prevention.

## Priority

1. Life safety and electrical/battery safety.
2. Manual lighting, access, climate, and alarms.
3. Network and core orchestration.
4. Energy/temporary settings.
5. Convenience automation such as follow-me audio.

## Git/Obsidian recovery

Avoid history surgery in GitHub Desktop unless a backup and explicit instruction exist. For a missing note, restore the individual file or use a reviewed branch/commit. Never force-push `main` merely to improve a commit message.

## Related

[Backups](Backups.md) · [Troubleshooting](Troubleshooting.md) · [Using This Book in Obsidian](../00%20Home/Using%20This%20Book%20in%20Obsidian.md)
