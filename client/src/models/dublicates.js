// find dublicates for clients - by name or phone
function clientDublicate(newName, newPhone, clients) {
  // get client names array
  const names = clients.map((elem) => elem.name);
  // get client phones array
  const phones = clients.map((elem) => elem.phone);

  return names.includes(newName) || phones.includes(newPhone);
}

export { clientDublicate };
