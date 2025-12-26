require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.URI);

// make connection to DB
async function dbConnection() {
  try {
    await client.connect();
    console.dir("Connected to DB");
    return client.db("AlarmVideo");
  } catch (err) {
    console.error(`!!! Error connecting to DB: ${err.message} !!!`);
  }
}

module.exports = { dbConnection };
