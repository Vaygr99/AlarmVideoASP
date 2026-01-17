// find dublicates for new client - by name or phone
function newClientDublicate(newName, newPhone, clients) {
  // get client names array
  const names = clients.map((elem) => elem.name);
  // get client phones array
  const phones = clients.map((elem) => elem.phone);

  return names.includes(newName) || phones.includes(newPhone);
}

module.exports = { newClientDublicate };
