# Reader and Contributor Guide

## For readers

This is a public engineering handbook, not a downloadable copy of a live home. Read the evidence label on every example:

- **Tested** means the repository records the conditions and observed result.
- **Illustrative** and **Pattern** mean you must validate the idea in your own Homey Pro setup.
- **Template** means you need to supply your own safe, private values.

Keep your device IDs, names, address, household routine, security design, credentials and exact floor plan in private notes—not in an issue, pull request or copied example.

## For contributors

Contributions are welcome when they make the handbook clearer, safer or more reusable.

1. Use fictional zones and placeholder IDs in all public examples.
2. State whether a change is **tested**, **illustrative**, **pattern**, or **proposed**.
3. For a tested flow, include its environment, trigger, expected result and acceptance check—without private operational data.
4. Do not submit exports of a live Homey, screenshots with identifiers, security routines, credentials, or real device inventories.
5. Keep code examples small and separately MIT licensed under `examples/`; handbook text remains CC BY-SA 4.0.

## What is tested?

Only an item explicitly marked **Tested** should be treated as an observed result. The HomeyScript and flow materials in `examples/` are intentionally labelled **Illustrative** or **Template**. They demonstrate structure and verification habits; they are not claims that they have been deployed in this home.
