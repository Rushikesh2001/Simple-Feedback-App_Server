const express = require("express");
const { adminLoginDAO } = require("../DAO/adminDAO");
const router = express.Router();

router.post("/login", async function (req, res, next) {
  try {
    const data = req.body;
    const response = await adminLoginDAO(data);
    res.send(JSON.stringify(response));
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

module.exports = router;
