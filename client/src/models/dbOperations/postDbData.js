import { v4 as generateId } from "uuid";

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
    setLoading(true);

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
          _id: answer.id,
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

// Add new device on edit page
async function addNewDevice(
  name,
  setName,
  setInputName,
  model,
  data,
  setData,
  setLoading,
  setNewDeviceError
) {
  // name - new device name
  // model - new device model (object, not .current.value)
  try {
    // new model id
    const newId = generateId();

    setLoading(true);

    // add new device
    const result = await fetch("http://localhost:4000/edit-data/devices/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        model: model.current.value,
        model_id: newId,
      }),
    });

    // get messages from server
    const answer = await result.json();

    if (!result.ok) throw new Error(answer.error || "Add new device Error");

    // add new device to root object
    setData((prev) => ({
      ...prev,
      devices: [
        ...prev.devices,
        {
          _id: answer.id,
          name,
          models: [{ id: newId, model: model.current.value }],
        },
      ],
    }));
    // clear inputs
    setName("");
    setInputName("");
    model.current.value = "";
    // no error message
    setNewDeviceError(false);
  } catch (err) {
    setNewDeviceError(true);
    console.log(err.message);
  } finally {
    // remove loading animation
    setLoading(false);
  }
}

export { addNewClient, addNewDevice };
