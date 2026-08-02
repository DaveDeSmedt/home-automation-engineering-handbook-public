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

This chapter records logical dependencies without publishing credentials, IP addresses, Wi-Fi names, or security-sensitive configuration. The earlier vault names a [[Home Network Gateway]]; its role and model must be verified by the reader.

```mermaid
flowchart TD
    Internet[Internet and cloud services]
    LAN[Home LAN / Wi-Fi]
    Homey[automation controller]
    Hue[Hue Bridge]
    multi-room audio[multi-room audio audio]
    Switch[presence platform ecosystem]
    Eco[residential battery platform ecosystem]
    HW[metering gateway telemetry]
    User[Phones and manual control]
    Internet --> LAN
    LAN --> Homey
    LAN --> Hue
    LAN --> multi-room audio
    LAN --> Switch
    LAN --> Eco
    LAN --> HW
    User --> LAN
```

## Dependency classes

| Class | Examples | Expected outage effect |
|---|---|---|
| Local automation | Homey, Hue bridge, LAN | Cross-system or lighting automation may degrade |
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
- Confirm Ethernet versus Wi-Fi connections for Homey, Hue, multi-room audio, residential battery platform, and metering gateway.
- Confirm which Homey integrations continue operating during an internet outage.
- Add a sanitized network diagram only after privacy review.
