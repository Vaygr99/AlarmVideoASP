const { ObjectId } = require("mongodb");

const {
  newDeviceDublicate,
} = require("../../models/dublicates/devicesDublicates.js");
const {
  newClientDublicate,
  updateClientDublicate,
} = require("../../models/dublicates/clientsDublicates.js");

const { verifyClient } = require("../../models/verify/verifyClients.js");
const { verifyNewDevice } = require("../../models/verify/verifyDevices.js");
// CRUD endpoints for edit section
function editData(app, db) {
  // app - express object
  // db - mongodb object

  // Get data from clients, devices and offers collections
  app.get("/edit-data", async (req, res) => {
    try {
      const clients = await db.collection("clients").find().toArray();
      const devices = await db.collection("devices").find().toArray();
      const offers = await db.collection("offers").find().toArray();
      res.status(200).json({ clients, devices, offers });
    } catch (error) {
      console.error("Error getting data for edit section:", error.message);
      res
        .status(500)
        .json({ error: "Server error while download data for edit page" });
    }
  });

  // Add new client
  app.post("/edit-data/clients/new", async (req, res) => {
    try {
      const { name, phone, info } = req.body;

      const clients = await db.collection("clients").find().toArray();

      // Verify data
      if (!verifyClient(name, phone)) {
        return res.status(400).json({ error: "Incorrect client data" });
      }
      // is dublicate
      if (newClientDublicate(name, phone, clients)) {
        return res.status(400).json({ error: "Dublicate client data" });
      }

      const result = await db
        .collection("clients")
        .insertOne({ name, phone, info });
      res.status(201).json({
        // return id as an answer
        id: result.insertedId,
        message: "New client added successfully",
      });
    } catch (error) {
      console.error("Error adding client:", error.message);
      res.status(500).json({ error: "Server error while adding client" });
    }
  });

  // Update client
  app.put("/edit-data/clients/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, phone } = req.body;
      const clients = await db.collection("clients").find().toArray();

      // Verify data
      if (!verifyClient(name, phone)) {
        return res.status(400).json({ error: "Incorrect client data" });
      }

      // is dublicate
      if (updateClientDublicate(id, name, phone, clients)) {
        return res.status(400).json({ error: "Dublicate client data" });
      }

      const updateData = req.body;
      // Check for data availability
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: "No data provided for update" });
      }
      // Validate id
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid client ID" });
      }
      // Update selected client
      const updated = await db
        .collection("clients")
        .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
      // Check for client availability
      if (updated.matchedCount === 0) {
        return res.status(404).json({ error: "Client not found" });
      }

      res.status(200).json({ message: "Client updated successfully" });
    } catch (err) {
      console.error("Error updating client:", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // delete client
  app.delete("/edit-data/clients/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // Validate id
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid client ID" });
      }
      // Delete client
      const result = await db
        .collection("clients")
        .deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Client not found" });
      }
      // Delete related offers
      await db.collection("offers").deleteMany({ clientId: new ObjectId(id) });
      res.status(200).json({ message: "Client deleted successfully" });
    } catch (err) {
      console.error("Error deleting client:", err.message);
      res.status(500).json({ error: "Server error" });
    }
  });

  //---------------------------------------------------------------------

  // Add new device
  app.post("/edit-data/devices/new", async (req, res) => {
    try {
      const { name, models } = req.body;

      const devices = await db.collection("devices").find().toArray();

      // Verify data
      //if (!verifyNewDevice(name, model)) {
      //  return res.status(400).json({ error: "Incorrect device data" });
      //}
      // is dublicate
      //if (newDeviceDublicate(name, model, devices)) {
      //  return res.status(400).json({ error: "Dublicate device data" });
      //}

      const result = await db.collection("devices").insertOne({ name, models });
      res.status(201).json({
        // return id as an answer
        id: result.insertedId,
        message: "New device added successfully",
      });
    } catch (error) {
      console.error("Error adding device:", error.message);
      res.status(500).json({ error: "Server error while adding device" });
    }
  });
}

module.exports = editData;
