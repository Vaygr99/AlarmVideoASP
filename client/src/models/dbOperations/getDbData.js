// Get collections (clients, devices, offers) for every page
async function getDataForPages(setData, setLoading, setDbError) {
  try {
    const result = await fetch("http://localhost:4000/all-data");
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

export { getDataForPages };
