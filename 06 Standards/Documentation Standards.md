---
title: Documentation Standards
type: standard
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [standards, documentation, publication]
---

# Documentation Standards

## Purpose

These standards keep the public edition readable, honest and safe to share.

## Front matter

```yaml
---
title:
type:
status:
revision:
audience: public
last-reviewed:
tags:
---
```

## Status vocabulary

| Status | Use it for |
|---|---|
| `reference` | Concepts, standards, templates, navigation and reader guidance |
| `pattern` | Reusable design guidance that requires local validation |
| `tested` | A behaviour with stated conditions and acceptance evidence |
| `proposed` | A design not yet demonstrated |
| `review-required` | A release-candidate page that needs editorial approval |

Do not use **installed**, **current**, **production**, or similar words in the public edition unless the sentence describes a generic test environment and includes its evidence.

## Public-writing rules

- Use role names—*lighting platform*, *battery system*, *presence input*—rather than private inventory.
- Use generic zones, never a real floor plan or address.
- Do not include credentials, IP addresses, account names, serial numbers, access instructions, security placement or screenshots with private data.
- Explain a vendor-specific concept only when it is necessary; link to a primary source in [Bibliography](../00%20Home/Bibliography.md).
- Label assumptions and proposed flows clearly.

## Links and diagrams

Use `Obsidian-style links` for book navigation. Use Mermaid for logical diagrams. Diagrams must not reveal topology, network ranges, cameras, locks, entry points or device placement from a real property.

## Release and revision control

`VERSION.md` is the book release. `revision` is local to a page. Update `last-reviewed` when a material statement is checked. Record publication-level changes in `CHANGELOG.md` and explain them in [Release Notes](../00%20Home/Release%20Notes.md).
