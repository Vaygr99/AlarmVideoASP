// Device verification
function verifyDevice(name = "", models = []) {
  // if no device name...
  if (!name) return false;
  // if no modules...
  if (!models.length) return false;
  // if models content is empty
  const isEmpty = models.some((elem) => elem.model.length === 0);
  if (isEmpty) return false;

  return true;
}

module.exports = { verifyDevice };
