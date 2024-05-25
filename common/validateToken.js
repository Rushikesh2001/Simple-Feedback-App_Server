var jwt = require("jsonwebtoken");
const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "feedback", (err) => {
      if (err) {
        res.send("token is invalid");
      } else {
        next();
      }
    });
  } else {
    res.send("You don't have permission to access this page");
  }
};

module.exports = validateToken;
