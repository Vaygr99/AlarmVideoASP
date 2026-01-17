// Client verification
function verifyNewClient(name = "", phone = "") {
  // if no client name...
  if (!name) return false;
  // if phone length isn't 17
  if (phone.length != 17) return false;

  return true;
}

module.exports = { verifyNewClient };
