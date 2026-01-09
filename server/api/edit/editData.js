const { verifyClients } = require("./verify/verifyClients.js");
// CRUD endpoints for edit section
function editData(app, db) {
  // app - express object
  // db - mongodb object

  const { ObjectId } = require("mongodb");

  // Get data from clients and devices collections
  app.get("/edit-data", async (req, res) => {
    try {
      const clients = await db.collection("clients").find().toArray();
      const devices = await db.collection("devices").find().toArray();
      res.status(200).json({ clients, devices });
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

      // If data is incorrect
      if (!verifyClients(req.body)) {
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
      const { id } = req.params;
      const updateData = req.body;
      // If data provided for update
      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: "No data provided for update" });
      }
      // If id is valid
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid client ID" });
      }
      // update selected client
      const updated = await db
        .collection("clients")
        .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
      // if no client was found
      if (updated.matchedCount === 0) {
        return res.status(404).json({ error: "Client not found" });
      }

      res.status(200).json({ message: "Client updated successfully" });
    } catch (err) {
      console.error("Error updating client:", err.message);
      res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = editData;
