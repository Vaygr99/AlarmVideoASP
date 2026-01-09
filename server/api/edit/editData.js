const { verifyClients } = require("./verify/verifyClients.js");
// CRUD endpoints for edit section
function editData(app, db) {
  // app - express object
  // db - mongodb object

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
}

module.exports = editData;
