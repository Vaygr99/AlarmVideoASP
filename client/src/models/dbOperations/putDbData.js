// Update client on edit page
async function updateClient(
  client,
  data,
  setData,
  setLoading,
  setUpdateClientError
) {
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

// --------------------------------------------

// Update client on edit page
async function updateDevice(
  device = {},
  data,
  setData,
  setLoading,
  setUpdateDeviceError
) {
  try {
    setLoading(true);

    // update device
    const result = await fetch(
      `http://localhost:4000/edit-data/devices/update/${device._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: device.name,
          models: device.models,
        }),
      }
    );

    // get messages from server
    const answer = await result.json();

    if (!result.ok) throw new Error(answer.error || "Update device Error");

    // update device of root object
    setData((prev) => ({
      ...prev,
      devices: prev.devices.map((elem) => {
        return device._id === elem._id
          ? {
              _id: device._id,
              models: device.models,
            }
          : elem;
      }),
    }));
    // no error message
    setUpdateDeviceError(false);
  } catch (err) {
    setUpdateDeviceError(true);
    console.log(err.message);
  } finally {
    // remove loading animation
    setLoading(false);
  }
}

export { updateClient, updateDevice };
