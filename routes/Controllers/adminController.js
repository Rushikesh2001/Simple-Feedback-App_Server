const getDBConnection = require("../../common/getDb");

async function adminLoginController(data) {
  const db = await getDBConnection();
  const collection = db.collection("accounts");
  const cursor = await collection.find({ name: data.name }).toArray();
  return cursor;
}

module.exports = {
  adminLoginController,
};
