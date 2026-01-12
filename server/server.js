const express = require("express");
const cors = require("cors");

const PORT = 4000;

const dbConnection = require("./db.js");
const verifyDB = require("./models/verifyDB.js");
const editData = require("./api/edit/editData.js");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // client
  })
);

(async function startServer() {
  try {
    const db = await dbConnection();
    await verifyDB(db);

    // CRUD endpoints for edit section
    editData(app, db);

    app.listen(PORT, () => {
      console.dir(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start:", err.message);
    process.exit(1);
  }
})();
