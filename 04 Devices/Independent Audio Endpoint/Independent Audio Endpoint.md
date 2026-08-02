---
title: Independent Audio Endpoint
type: device
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [integration, independent-audio]
---

# Independent Audio Endpoint

## Confirmed fact

A independent audio endpoint audio endpoint is present in the [[Lounge Zone]].

## Unknowns

Exact model, grouping protocol, automation platform/device, available cards, playback sources, network path, and ability to resume or synchronize with multi-room audio are unverified.

## Architecture boundary

Treat independent audio endpoint as a separate audio domain. Do not claim seamless multi-room audio-to-independent audio endpoint handover. A future integration test may support start/stop/volume or source-specific playback, but behavior must be documented from the actual device.

## Acceptance questions

1. Can Homey detect active playback reliably?
2. Can Homey start the same content/source at a useful position?
3. What latency and volume behavior are observed?
4. Does TV or manual lounge use block automation?
5. What remains available during network/cloud outages?

## Related

[[Audio]] · [[Lounge Zone]] · [[Verification Standards]]
