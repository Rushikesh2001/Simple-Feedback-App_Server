const express = require("express");
const {
  saveFeedbackDAO,
  sendMailFeedbackDAO,
  getFeedbackDAO,
  archiveFeedbackDAO,
  sendResolveMailDAO,
  resolveFeedbackDAO,
} = require("../DAO/feedbackDAO");
const validateToken = require("../../common/validateToken");
const router = express.Router();

router.post("/save", async function (req, res, next) {
  try {
    const feedback = req.body;
    const response = await saveFeedbackDAO(feedback);
    res.send(
      JSON.stringify({
        status: "success",
        insertedId: response.insertedId,
        issueId: response.issueId,
      })
    );
  } catch (error) {
    res.send(
      JSON.stringify({
        status: "failure",
        message: error.message,
        error,
      })
    );
  }
});

router.post("/mail", async function (req, res, next) {
  try {
    const data = req.body;
    const response = await sendMailFeedbackDAO(data);
    res.send(JSON.stringify(response));
  } catch (error) {
    res.send(
      JSON.stringify({
        status: "failure",
        message: error.message,
      })
    );
  }
});

router.post("/mail/resolve", validateToken, async function (req, res, next) {
  try {
    const data = req.body;
    const { client } = req.query;
    const response = await sendResolveMailDAO(data, client);
    res.send(JSON.stringify(response));
  } catch (error) {
    res.send(
      JSON.stringify({
        status: "failure",
        message: error.message,
      })
    );
  }
});

router.post("/data/:status", validateToken, async function (req, res, next) {
  const { status } = req.params;
  try {
    var feedbacks = await getFeedbackDAO(status);
    res.send(
      JSON.stringify({
        status: "success",
        data: feedbacks,
      })
    );
  } catch (error) {
    res.send(
      JSON.stringify({
        status: "failure",
        message: error.message,
      })
    );
  }
});

router.post("/saveFeedback", validateToken, async function (req, res, next) {
  const { issueId } = req.query;
  try {
    var response = await archiveFeedbackDAO(issueId);
    res.send(
      JSON.stringify({
        status: "success",
        ...response,
      })
    );
  } catch (error) {
    res.send(
      JSON.stringify({
        status: "failure",
        message: error.message,
      })
    );
  }
});

router.post("/resolve", validateToken, async function (req, res, next) {
  const { issueId } = req.query;
  try {
    var response = await resolveFeedbackDAO(issueId);
    res.send(
      JSON.stringify({
        status: "success",
        ...response,
      })
    );
  } catch (error) {
    res.send(
      JSON.stringify({
        status: "failure",
        message: error.message,
      })
    );
  }
});

module.exports = router;
