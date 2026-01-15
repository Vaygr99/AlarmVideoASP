// find dublicates for new client - by name or phone
function newClientDublicate(newName, newPhone, clients) {
  // get client names array
  const names = clients.map((elem) => elem.name);
  // get client phones array
  const phones = clients.map((elem) => elem.phone);

  return names.includes(newName) || phones.includes(newPhone);
}

// find dublicates for updating client - by name or phone
function updateClientDublicate(id, name, phone, clients) {
  // id - id of updating client

  // find all clients except of current (with our id)
  const found = clients.filter((elem) => elem._id !== id);

  return (
    found.some((elem) => elem.name === name) ||
    found.some((elem) => elem.phone === phone)
  );
}

export { newClientDublicate, updateClientDublicate };
