// Get collections (clients, devices, offers) for edit page
async function getDataForEditPage(setData, setLoading, setDbError) {
  try {
    const result = await fetch("http://localhost:4000/edit-data");
    if (!result.ok) throw new Error("Error");
    const data = await result.json();
    setData(data);
  } catch (err) {
    setDbError(err.message);
  } finally {
    // remove loading animation after 1 second
    setTimeout(() => setLoading(false), 1000);
  }
}

export { getDataForEditPage };
