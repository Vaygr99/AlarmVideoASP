// Get collections (clients, devices, offers) for edit page
async function getDataForEditPage(setData) {
  try {
    const result = await fetch("http://localhost:4000/edit-data");
    if (!result.ok) throw new Error("Error");
    const data = await result.json();
    setData(data);
    console.log(data);
  } catch (err) {
    console.log(err.message);
    //setLoadingError(err.message);
  } finally {
    //setLoading(false);
  }
}

export { getDataForEditPage };
