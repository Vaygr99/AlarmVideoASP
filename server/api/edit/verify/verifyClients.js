// Add new client verification
function verifyNewClient(data) {
  if (!data) return false;
  // base verification (for example)
  if (typeof data.name !== "string") return false;
  if (typeof data.phone !== "string") return false;
  return true;
}

module.exports = { verifyNewClient };
