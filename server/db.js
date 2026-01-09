require("dotenv").config();
const { MongoClient } = require("mongodb");

// Get secret uri
const client = new MongoClient(process.env.URI);

// Make connection to DB
async function dbConnection() {
  try {
    await client.connect();
    console.dir("Connected to DB");
    return client.db("AlarmVideo");
  } catch (err) {
    throw new Error(`!!! Error connecting to DB: ${err.message} !!!`);
  }
}

module.exports = { dbConnection };
