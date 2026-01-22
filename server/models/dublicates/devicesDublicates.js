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

// find dublicates for updating client - by name or phone
function updateDeviceDublicate(id, name, models, devices) {
  // id - id of updating device

  // find all devices except of current (with our id)
  const found = devices.filter((elem) => elem._id.toString() !== id);
  console.log(found);

  // find dublicate for updating device models
  const isDublicateModel = found.some((d) =>
    d.models.some((dm) => models.some((m) => dm.model === m.model))
  );

  return found.some((elem) => elem.name === name) || isDublicateModel;
}

module.exports = { newDeviceDublicate, updateDeviceDublicate };
