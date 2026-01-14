const verifyClient = require("./verify/verifyClient.js");
// CRUD endpoints for edit section
function editData(app, db) {
  // app - express object
  // db - mongodb object

  const { ObjectId } = require("mongodb");

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
        .json({ error: "Server error while download data for edit section" });
    }
  });

  // Add new client
  app.post("/edit-data/clients/new", async (req, res) => {
    try {
      const { name, phone, info } = req.body;
      // Verify data
      if (!verifyClient(req.body)) {
        return res.status(400).json({ error: "Incorrect client data" });
      }

      await db.collection("clients").insertOne({ name, phone, info });
      res.status(201).json({ message: "New client added successfully" });
    } catch (error) {
      console.error("Error adding client:", error.message);
      res.status(500).json({ error: "Server error while adding client" });
    }
  });

  // Update client
  app.put("/edit-data/clients/update/:id", async (req, res) => {
    try {
      // Verify data
      if (!verifyClient(req.body)) {
        return res.status(400).json({ error: "Incorrect client data" });
      }

      const { id } = req.params;
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
      console.error("Error updating client:", err.message);
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
}

module.exports = editData;
