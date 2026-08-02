---
title: Home Network Gateway
type: integration-pattern
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [integration, network, safety]
---

# Home Network Gateway

## Role

The network gateway provides the connectivity on which many smart-home integrations depend. It is infrastructure, not the automation brain.

## Public documentation boundary

Do not publish router model, Wi-Fi name, IP plan, VPN configuration, DNS settings, DHCP reservations, firewall rules, remote-access method, exported configuration or recovery secrets.

## Recommended private record

In a separate secured repository, record:

- how Homey and major bridges connect;
- which integrations need local network reachability;
- backup and recovery procedure for the network gateway;
- IoT segmentation policy;
- how to test an internet outage separately from a local-network outage.

## Design principle

A loss of internet should degrade cloud-dependent features without making lights, switches or safety controls unusable. Test this assumption in the actual installation.

## Related

[[Network Topology]] · [[Backups]] · [[Recovery]] · [[Troubleshooting]]
