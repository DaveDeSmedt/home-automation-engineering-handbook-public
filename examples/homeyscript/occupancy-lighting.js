/**
 * Illustrative HomeyScript: occupancy-aware lighting decision.
 *
 * This is a teaching example, not a production flow. It deliberately uses
 * a placeholder device ID and does not contain real names, IDs or schedules.
 * Test it with a non-critical light and retain manual control.
 */

const LIGHT_DEVICE_ID = 'replace-with-a-test-light-device-id';
const isOccupied = true; // In a real flow, provide this from a validated state variable.
const isQuietHours = false; // Define and test your own policy before enabling this.

if (!isOccupied || isQuietHours) {
  log('No lighting action: occupancy or quiet-hours guard blocked it.');
  return;
}

const light = await Homey.devices.getDevice({ id: LIGHT_DEVICE_ID });

if (!light.capabilitiesObj.onoff) {
  throw new Error('The selected test device does not expose the onoff capability.');
}

if (light.capabilitiesObj.onoff.value === true) {
  log('No lighting action: the test light is already on.');
  return;
}

await light.setCapabilityValue({ capabilityId: 'onoff', value: true });
log('Test light switched on after occupancy and quiet-hours guards passed.');
