// Client verification
function verifyClient(data) {
  if (!data) return false;

  // if no client name...
  if (!data.name) return false;
  // if phone length isn't 17
  if (data.phone.length != 17) return false;

  return true;
}

module.exports = verifyClient;
