// Update client on edit page
async function updateClient(
  client,
  data,
  setData,
  setLoading,
  setUpdateClientError
) {
  // name - update client name (object, not .current.value)
  // phone - update client phone
  // info - update client info (object, not .current.value)
  try {
    setLoading(true);

    // update client
    const result = await fetch(
      `http://localhost:4000/edit-data/clients/update/${client._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: client.name,
          phone: client.phone,
          info: client.info,
        }),
      }
    );

    // get messages from server
    const answer = await result.json();

    if (!result.ok) throw new Error(answer.error || "Update client Error");

    // update client of root object
    setData((prev) => ({
      ...prev,
      clients: prev.clients.map((elem) => {
        return client._id === elem._id
          ? {
              _id: client._id,
              name: client.name,
              phone: client.phone,
              info: client.info,
            }
          : elem;
      }),
    }));
    // no error message
    setUpdateClientError(false);
  } catch (err) {
    setUpdateClientError(true);
    console.log(err.message);
  } finally {
    // remove loading animation
    setLoading(false);
  }
}

export { updateClient };
