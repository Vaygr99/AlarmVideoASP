// find dublicates for new device - by name or model
function newDeviceDublicate(newName, newModel, devices) {
  // get device names array
  const names = devices.map((elem) => elem.name);
  // get device models array
  const models = [];
  devices.forEach((elem) => {
    elem.models.forEach((m) => models.push(m.model));
  });
  return names.includes(newName) || models.includes(newModel);
}

module.exports = { newDeviceDublicate }; 
