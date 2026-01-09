const express = require("express");

const PORT = 4000;

const { dbConnection } = require("./db.js");
const app = express();

// Get data from clients and devices for edit section in admin area
app.get("/edit-data", async (req, res) => {
  try {
    const db = await dbConnection();
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

app.listen(PORT, () => {
  console.dir(`Server is running on port ${PORT}`);
});
