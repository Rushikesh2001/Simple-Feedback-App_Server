const mongoClient = require("mongodb").MongoClient;
const client = new mongoClient(process.env.DB_CONN_URL);

async function getDBConnection() {
  await client.connect();
  const db = await client.db("crudApp");
  return db;
}

module.exports = getDBConnection;
