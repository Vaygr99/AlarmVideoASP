const express = require("express");

const PORT = 4000;

const dbConnection = require("./db.js");
const verifyDB = require("./models/verifyDB.js");
const editData = require("./api/editData.js");

const app = express();

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
