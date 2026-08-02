# Occupancy Lighting Acceptance Checklist

**Status:** Acceptance check / illustrative

Run this only with a non-critical test light and a manual switch available.

- [ ] Confirm the flow uses a test-zone device and contains no live security or safety action.
- [ ] With `zone.<zone>.occupied = false`, trigger the flow: the light remains unchanged.
- [ ] With `home.quiet_hours = true`, trigger the flow: the documented quiet-hours behaviour occurs.
- [ ] With both guards clear and the light off, trigger the flow: the light turns on once.
- [ ] Trigger it again while the light is already on: no unnecessary second action occurs.
- [ ] Manually change the light, then trigger the flow: the manual-hold rule behaves as documented.
- [ ] Disable or simulate a missing input: the flow fails safely and does not loop.
- [ ] Record the date, Homey Pro version, app/integration version and observed outcome in your **private** notes.

Passing this checklist does not prove that the flow is safe for every zone or every device. Re-run it after changing devices, apps, variables or logic.
