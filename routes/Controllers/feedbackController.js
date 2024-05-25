const getDBConnection = require("../../common/getDb");

async function saveFeedbackController(data) {
  const db = await getDBConnection();
  const collection = db.collection("feedbacks");
  const cursor = await collection.insertOne(data);
  return cursor;
}

async function getFeedbackController(filter) {
  const db = await getDBConnection();
  const collection = db.collection("feedbacks");
  const cursor = await collection
    .find(
      filter !== "archived"
        ? filter === "all"
          ? {}
          : { status: filter }
        : { save: true }
    )
    .toArray();
  return cursor;
}

async function archiveFeedbackController(id) {
  const db = await getDBConnection();
  const collection = db.collection("feedbacks");
  const cursor = collection.updateOne(
    { issueId: id },
    { $set: { save: true } }
  );
  return cursor;
}

async function resolveFeedbackController(id) {
  const db = await getDBConnection();
  const collection = db.collection("feedbacks");
  const cursor = await collection.updateOne(
    { issueId: id },
    { $set: { status: "resolved" } }
  );
  return cursor;
}

module.exports = {
  saveFeedbackController,
  getFeedbackController,
  archiveFeedbackController,
  resolveFeedbackController,
};
