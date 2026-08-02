---
title: Publication Audit
type: audit
status: review-required
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [audit, privacy, quality, rc]
---

# Publication Audit

## Purpose

Confirm that this branch is safe and coherent enough for editorial review as a public release candidate. This audit does not approve publication or certify a real installation.

## Completed checks

| Area | Result |
|---|---|
| Owner and occupant names | Generalized or removed |
| Named hardware inventory and model references | Replaced with functional roles |
| Exact room topology | Replaced with a generic teaching-zone model |
| Network and security details | Excluded by policy and text audit |
| Tested versus proposed behaviour | Defined by [Verification Standards](../06%20Standards/Verification%20Standards.md) and used throughout |
| Reader navigation | Rebuilt around [Start Here](Start%20Here.md), [Index](Index.md) and README |
| Source transparency | [Bibliography](Bibliography.md) added; unsupported capabilities remain unclaimed |

## Required reviewer checks

- [ ] Read [Publication Scope and Privacy](Publication%20Scope%20and%20Privacy.md) and confirm no detail should return to the public edition.
- [ ] Search the branch for personal names, addresses, credentials, serial numbers and images.
- [ ] Test internal links and Mermaid rendering in Obsidian.
- [ ] Verify Homey-specific statements against current official documentation.
- [ ] Review copyright, third-party marks and the intended licence.
- [ ] Confirm that all examples marked **tested** actually contain sufficient acceptance evidence.

## Editorial decision log

| Topic | Decision |
|---|---|
| Real property layout | Replace with generic zones and an illustrative topology. |
| Product models | Use role-based integration pages unless a product is required for a documented Homey concept. |
| Security | Explain principles; omit configuration and placement details. |
| Follow-me audio | Present as a pattern/proposed case study until independently tested. |
| Operations | Retain checklists and recovery principles; omit concrete account, backup and network details. |

## Assessment

The branch is suitable for **release-candidate review**. It is not yet an instruction to make the repository public. Reviewers must resolve the checklist above and choose licensing before any publication action.
