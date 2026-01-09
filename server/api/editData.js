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
}

module.exports = editData;
