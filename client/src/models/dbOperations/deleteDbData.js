// delete client
export async function deleteClient(
  id,
  setData,
  setDeleteClientError,
  setLoading
) {
  try {
    setLoading(true);

    // delete client
    const result = await fetch(
      `http://localhost:4000/edit-data/clients/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // get answers from server
    const answer = await result.json();

    if (!result.ok) throw new Error(answer.error || "Delete client error");

    setData((prev) => ({
      ...prev,
      clients: prev.clients.filter((elem) => elem._id !== id),
      offers: prev.offers.filter((elem) => elem.clientId !== id),
    }));
  } catch (err) {
    console.error(err.message);
    setDeleteClientError(true);
  } finally {
    setLoading(false);
  }
}
