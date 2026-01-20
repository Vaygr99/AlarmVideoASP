// find dublicates for new device - by name or model
function newDeviceDublicate(name = "", models = [], devices = []) {
  // name - new device name
  // models - models for new device
  // devices - all devices

  // find dublicate for new device name
  const isDublicateName = devices.some((elem) => elem.name === name);
  if (isDublicateName) return true;

  // find dublicate for new device models
  const isDublicateModel = devices.some((d) =>
    d.models.some((dm) => models.some((m) => dm.model === m.model))
  );
  if (isDublicateModel) return true;

  return false;
}

module.exports = { newDeviceDublicate };
