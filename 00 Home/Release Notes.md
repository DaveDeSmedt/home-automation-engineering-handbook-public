---
title: Release Notes
type: release
status: reference
revision: 1.1
audience: public
last-reviewed: 2026-08-02
tags: [release, public-edition, rc]
---

# Release Notes — v1.2.0-rc.1

## Release intent

This release candidate transforms a private operational handbook into a public educational book:

> **Building a Stateful Smart Home: Engineering Reliable Home Automation with automation controller**

It preserves engineering principles, failure patterns, decision records, worked examples and operational thinking. It removes or generalizes information that could identify people, a property or its security posture.

## What readers can rely on

- A state-separation pattern for lighting and coverings.
- Safety-bounded patterns for sensor diagnostics, distributed audio, and
  temporary battery protection during vehicle charging.
- Clear boundaries between observed implementation, reusable pattern, and
  verification-required work.

- The distinction between **tested**, **pattern**, **proposed** and **reference** is deliberate.
- Diagrams show logical relationships, not a real property layout or network diagram.
- Examples demonstrate an approach; their capability must be confirmed in the reader’s own automation platforms and devices.
- Safety-critical functions remain outside the scope of automation-only control.

## Editorial changes

- Named people became generic occupants.
- Named rooms became generic teaching zones.
- Product-model and inventory references became integration roles.
- The dashboard is now a reader-facing Start Here page.
- A preface, reading guide, publication policy and bibliography were added.
- The index, glossary, standards and roadmap now support a book rather than an operating vault.

## Reviewer focus

1. Search for residual personal, property, network or security information.
2. Check that links open in Obsidian.
3. Review technical statements against current Homey and device documentation.
4. Decide whether the repository will receive a public licence after RC review.

## Not included

No exact device inventory, firmware values, sensor placement, IP plan, access instructions, floor plan, account data, photographs or security configuration is included in this release.
