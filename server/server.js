const express = require("express");
const app = express();
const { dbConnection } = require("./db.js");

const PORT = 4000;

// get data from clients collection
app.get("/", async (req, res) => {
  try {
    const db = await dbConnection();
    const clients = await db.collection("clients").find().toArray();
    res.status(200).json({ clients: clients });
  } catch (error) {
    console.error("Error getting data:", error.message);
    res.status(500).json({ error: "Server error while download data" });
  }
});

app.listen(PORT, () =>
  console.log(`--- Server is running on port: ${PORT} ---`)
);
