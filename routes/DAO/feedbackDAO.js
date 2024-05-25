const generateId = require("../../common/generateID");
const getCurrentDate = require("../../common/getDate");
const mailTo = require("../../common/sendMail");
const {
  saveFeedbackController,
  getFeedbackController,
  archiveFeedbackController,
  resolveFeedbackController,
} = require("../Controllers/feedbackController");

async function saveFeedbackDAO(data) {
  const issueId = generateId();
  data.issueId = issueId;
  data.status = "pending";
  data.save = false;
  data.date = getCurrentDate();
  var res = await saveFeedbackController(data);
  res.issueId = issueId;
  return res;
}

async function sendMailFeedbackDAO(data) {
  await mailTo(
    "New issue raised",
    "support",
    data.issueId,
    data.issue,
    data.description,
    "myfeedbackapp05@gmail.com"
  );
  return {
    status: "success",
    message: "Mail sent successfully",
  };
}

async function sendResolveMailDAO(data, client) {
  await mailTo(
    "Issue Resolved",
    `${client === "user" ? "resolvedUser" : "resolvedSupport"}`,
    data.issueId,
    data.issue,
    data.message,
    `${client === "user" ? data.email : "myfeedbackapp05@gmail.com"}`
  );
  return {
    status: "success",
    message: "Mail sent successfully",
  };
}

async function getFeedbackDAO(status) {
  var res = await getFeedbackController(status);
  return res;
}

async function archiveFeedbackDAO(issueId) {
  var res = await archiveFeedbackController(issueId);
  return res;
}

async function resolveFeedbackDAO(issueId) {
  var res = await resolveFeedbackController(issueId);
  return res;
}

module.exports = {
  saveFeedbackDAO,
  sendMailFeedbackDAO,
  getFeedbackDAO,
  archiveFeedbackDAO,
  sendResolveMailDAO,
  resolveFeedbackDAO,
};
