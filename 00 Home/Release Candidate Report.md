---
title: Release Candidate Report
type: release-report
status: review-required
revision: 1.1
audience: public
last-reviewed: 2026-08-02
tags: [release, rc, audit, publication]
---

# Release Candidate Report — v1.2.0-rc.1

## Scope

This branch converts a private operational vault into the public educational book:

> **Building a Stateful Smart Home: Engineering Reliable Home Automation with automation controller**

The private operational branch remains the source for real inventory, location, network, security and account information.

## Editorial result

This incremental candidate incorporates current evidence-bound operational
lessons as public patterns. It does not promote unresolved incidents or
installation-specific configuration to tested universal behaviour.

- Front matter, reading routes, glossary, index, bibliography and publication policy are present.
- Architecture, zone, system, Homey, standards, operations and template chapters remain linked as one book.
- Device-specific pages now describe integration roles and patterns.
- Worked examples use a generic reference topology.
- Tested, pattern, proposed and reference material are separated.

## Privacy decisions

### Sanitization amendment — 2026-08-02

The final publication audit identified legacy product-named integration pages
and owner metadata inherited from the source history. They are removed from
this public candidate because generic integration-role pages are canonical for
readers. Product labels, quantities, and location references are replaced with
role-based teaching language; the private edition remains the operational
record.

- Removed owner and occupant identity.
- Generalized device models, exact quantities, room placement and route details.
- Replaced a real-house topology with teaching zones.
- Omitted network identity, IP plan, credentials, serials, account details, security layout, photographs and floor plans.
- Retained automation controller as the orchestration context and retained vendor-neutral roles only where they support the lesson.

## Validation results

| Check | Result |
|---|---|
| Tracked files after RC additions | 97 |
| Markdown pages | 92 |
| Obsidian internal links | Pass |
| Relative Markdown links | Pass |
| Duplicate Markdown basenames | None |
| Unbalanced fenced blocks | None |
| Required metadata | Present on all substantive pages |
| Public-term privacy scan | No matches for audited names, models, room names or topology terms |
| Git whitespace check | Pass |

## Remaining review questions

1. Does the author want a public licence, and if so which one?
2. Are the bibliography references sufficient for the intended audience?
3. Should HomeyScript receive a fully tested, safe example before the final v1.1.0 release?
4. Should the book remain Homey-Pro-centred or include a short vendor-neutral comparison chapter?
5. Is any third-party trademark attribution required for the final publication format?

## Review instructions

### In GitHub Desktop

1. Select branch `release/public-edition-v1.2-rc1`.
2. Open **History** and inspect the RC commits.
3. Use **Show in Explorer** to open the same branch as an Obsidian vault.
4. Do not merge or push to a public remote until the checklist in [[Publication Audit]] is complete.

### In Obsidian

1. Open the branch folder as a vault.
2. Begin at [[Start Here]].
3. Test the links in [[Index]] and read the warning in [[Publication Scope and Privacy]].
4. Open the graph only to check navigation; it is not a deployment diagram.
5. Record editorial findings privately; do not add real-home details to this branch.

## Proposed version

`v1.2.0-rc.1` now. Promote only after privacy, technical and licensing review.

## Related

[[Publication Audit]] · [[Publication Standards]] · [[Release Notes]] · [[Changelog]]
