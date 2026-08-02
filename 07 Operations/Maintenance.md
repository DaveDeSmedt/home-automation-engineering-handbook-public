---
title: Maintenance
type: operation
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [operations, maintenance]
---

# Maintenance

## Monthly

- Review Homey/app/device warnings and failed flows.
- Check battery-powered sensors and replace below the chosen maintenance threshold.
- Confirm critical manual controls and notifications.
- Review residential battery platform temporary settings and reconciliation state.
- Confirm backups have succeeded and are restorable.

## Quarterly

- Test one representative flow in each active subsystem.
- Review presence false positives, blind spots, and clear delays.
- Inspect multi-room audio grouping/manual playback recovery.
- Review firmware/app changes and deprecated cards.
- Check network/storage capacity and configuration backups.
- Update [[Integration Roles]] and [[Flow Catalogue]].

## Annually

- Perform a controlled recovery exercise from [[Backups]].
- Review electrical, battery, smoke, leak, and climate equipment according to manufacturer/qualified-service guidance.
- Audit privacy-sensitive repository content and collaborator access.
- Review all `proposed` pages: test, defer, or retire.
- Reconfirm room topology and installed devices.

## Change procedure

1. Record reason, scope, and rollback.
2. Back up affected platforms.
3. Change one bounded area.
4. Test normal, manual, and failure behavior.
5. Update evidence, page revision, changelog if release-worthy, and maintenance date.

Use [[Maintenance Template]] for recurring work and [[Incident Template]] when behavior fails unexpectedly.
