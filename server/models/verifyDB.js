// check db for presence of required collections
async function verifyDB(db) {
  // db - mongodb object

  const requiredCollections = ["clients", "devices", "offers"];
  const collections = await db.listCollections().toArray();
  const names = collections.map((c) => c.name);
  for (const name of requiredCollections) {
    if (!names.includes(name)) {
      throw new Error(`Missing collection: ${name}`);
    }
  }
}

module.exports = verifyDB;
