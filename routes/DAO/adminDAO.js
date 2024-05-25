const { adminLoginController } = require("../Controllers/adminController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function adminLoginDAO(data) {
  var res = await adminLoginController(data);
  res = res[0];
  console.log(res);
  console.log(data);
  if (!res) {
    return false;
  }
  const result = await bcrypt.compare(data.pwd, res.pwd);
  const token = jwt.sign(res, "feedback");
  return {
    auth: result,
    token,
  };
}

module.exports = { adminLoginDAO };
