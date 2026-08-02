---
title: Backups
type: operation
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [operations, backup, git]
---

# Backups

## Backup layers

| Asset | Method | Sensitivity |
|---|---|---|
| Handbook Markdown | Local Obsidian folder plus private GitHub history | Review before sharing |
| Homey configuration | Supported Homey backup/export | May contain device/account metadata |
| Native platforms | Vendor-supported backup/export where available | Often account-bound |
| Network | Protected router/controller configuration export | Highly sensitive |
| Plans/manuals/receipts | Encrypted or access-controlled storage | Personal/property data |

## Rule of three

Keep the working copy, a separate backup, and an off-device copy where appropriate. Git history is useful version control but is not the sole disaster-recovery strategy.

## Before major changes

- Ensure GitHub Desktop shows the expected repository and no unexplained local changes.
- Commit/push the handbook with a meaningful message.
- Run a Homey backup when the change affects flows/apps/devices.
- Export native/network configuration when supported and materially affected.
- Record where the recovery material is stored without committing secrets.

## Restore validation

At least annually, verify that backups can be opened and that the documented account/recovery ownership is current. A successful “backup created” message is not proof of restoration.

## Related

[Recovery](Recovery.md) · [Using This Book in Obsidian](../00%20Home/Using%20This%20Book%20in%20Obsidian.md) · [Maintenance](Maintenance.md)
