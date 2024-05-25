const express = require("express");
const router = express.Router();

router.get("/support", function (req, res, next) {
  const { issueId, issue, description } = req.query;
  const message = {
    issueId,
    issue,
    description,
  };
  console.log(message);
  res.render("support", { message });
});

router.get("/resolvedSupport", function (req, res, next) {
  const { issueId, issue, description } = req.query;
  const message = {
    issueId,
    issue,
    description,
  };
  res.render("resolvedSupport", { message });
});

router.get("/resolvedUser", function (req, res, next) {
  const { issueId, issue, description } = req.query;
  const message = {
    issueId,
    issue,
    description,
  };
  res.render("resolvedUser", { message });
});

module.exports = router;
