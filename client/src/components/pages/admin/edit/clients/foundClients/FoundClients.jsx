function FoundClients({ data, clientName = "" }) {
  // data - loaded data from server
  // clientName - entered client name

  // filter clients by current client name
  const list =
    clientName && data?.clients
      ? data.clients.filter((elem) =>
          elem.name.toLowerCase().includes(clientName.toLowerCase())
        )
      : [];

  // if not found
  if (!list.length) {
    return <h2>- Не знайдено -</h2>;
  }

  return (
    <div>
      {list.map((elem) => (
        <h2>{elem.name}</h2>
      ))}
    </div>
  );
}

export default FoundClients;
