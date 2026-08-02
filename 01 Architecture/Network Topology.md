---
title: Network Topology
type: architecture
status: proposed
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [network, topology, privacy]
---

# Network Topology

## Scope

This chapter records logical dependencies without publishing credentials, IP addresses, Wi-Fi names, or security-sensitive configuration. It is a generic teaching topology, not a diagram of a real home network.

```mermaid
flowchart TD
    internet[Internet and cloud services]
    lan[Home LAN and Wi-Fi]
    homey[Homey Pro]
    lighting[Lighting bridge]
    audio[Multi-room audio platform]
    presence[Presence platform]
    battery[Residential battery platform]
    metering[Energy-metering gateway]
    user[Phones and manual controls]

    internet --> lan
    lan --> homey
    lan --> lighting
    lan --> audio
    lan --> presence
    lan --> battery
    lan --> metering
    user --> lan
```

## Dependency classes

| Class | Examples | Expected outage effect |
|---|---|---|
| Local automation | Homey Pro, lighting bridge, LAN | Cross-system or lighting automation may degrade |
| Local media | multi-room audio devices and LAN | Playback/group changes may fail |
| Cloud-assisted integration | Vendor APIs where applicable | Telemetry or remote commands may be delayed/unavailable |
| Manual control | Physical switches, vendor apps on LAN | Must remain available where technically possible |

## Rules

- Do not store passwords, tokens, recovery codes, full IP plans, or alarm details in Git.
- Reserve stable addresses only when an integration demonstrably needs them; record the rule, not the secret.
- Document whether a control path is local, cloud-dependent, or unknown.
- Test outage behavior before claiming local execution.
- Back up router configuration separately and protect it as sensitive material.

## Verification queue

- Confirm router, access point, switch, VLAN, and DNS equipment.
- Confirm Ethernet versus Wi-Fi connections for Homey Pro, the lighting bridge, multi-room audio, residential battery platform, and metering gateway.
- Confirm which Homey Pro integrations continue operating during an internet outage.
