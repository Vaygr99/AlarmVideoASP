require("dotenv").config();
const { MongoClient } = require("mongodb");

// cloud
// const uri = process.env.MONGODB_URI;
// local
const uri = process.env.MONGODB_LOCAL_URI;

const DB_NAME = process.env.DB_NAME;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env");
}

const client = new MongoClient(uri);

// Make connection to DB
async function dbConnection() {
  try {
    await client.connect();
    console.dir("Connected to DB");
    return client.db(DB_NAME);
  } catch (err) {
    throw new Error(`!!! DB connection error: ${err.message} !!!`);
  }
}

module.exports = dbConnection;
