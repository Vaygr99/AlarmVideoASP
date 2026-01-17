// Device verification
function verifyNewDevice(name, model) {
  // if no device name...
  if (!name) return false;
  // if no device model...
  if (!model) return false;

  return true;
}

module.exports = { verifyNewDevice };
