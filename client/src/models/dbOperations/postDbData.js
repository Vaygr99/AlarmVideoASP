import { clientDublicate } from "../dublicates.js";

// Add new client on edit page
async function addNewClient(
  name,
  setName,
  setInputName,
  phone,
  setPhone,
  info,
  data,
  setData,
  setLoading,
  setNewClientError
) {
  // name - new client name
  // phone - new client phone
  // info - new client info (object, not .current.value)
  try {
    // if dublicate is found...
    if (clientDublicate(name, phone, data.clients))
      throw new Error("Duplicate found by name or phone");

    // add new client
    const result = await fetch("http://localhost:4000/edit-data/clients/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        info: info.current.value,
      }),
    });

    // get messages from server
    const answer = await result.json();

    if (!result.ok) throw new Error(answer.error || "Add new client Error");

    // add new client to root object
    setData((prev) => ({
      ...prev,
      clients: [
        ...prev.clients,
        {
          name,
          phone,
          info: info.current.value,
        },
      ],
    }));
    // clear inputs
    setName("");
    setInputName("");
    setPhone("");
    info.current.value = "";
    // no error message
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
