// Add new client on edit page
async function addNewClient(
  name,
  phone,
  info,
  setData,
  setLoading,
  setNewClientError
) {
  // name - new client name
  // phone - new client phone
  // info - new client info
  try {
    const result = await fetch("http://localhost:4000/edit-data/clients/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        info,
      }),
    });

    if (!result.ok) throw new Error("Add new client Error");

    setData((prev) => ({
      ...prev,
      clients: [
        ...prev.clients,
        {
          name,
          phone,
          info,
        },
      ],
    }));
    setNewClientError(false);
  } catch (err) {
    setNewClientError(true);
    console.log(err.message);
  } finally {
    // remove loading animation
    setLoading(false);
  }
}

export { addNewClient };
