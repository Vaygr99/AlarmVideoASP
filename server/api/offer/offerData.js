const { ObjectId } = require("mongodb");

// CRUD endpoints for edit section
function offerData(app, db) {
  // app - express object
  // db - mongodb object

  // Get data from clients, devices and offers collections
  app.get("/all-data", async (req, res) => {
    try {
      const clients = await db.collection("clients").find().toArray();
      const devices = await db.collection("devices").find().toArray();
      const offers = await db.collection("offers").find().toArray();
      res.status(200).json({ clients, devices, offers });
    } catch (error) {
      console.error("Error getting data for offer section:", error.message);
      res
        .status(500)
        .json({ error: "Server error while download data for offer page" });
    }
  });
}

module.exports = offerData;
