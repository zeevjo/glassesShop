const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticated(req, res, next) {

  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log("yoyo im the user", user);
    if (err) {
      console.log("authenticated err", err);
      return res.sendStatus(403);
    }
    req.user = user;
    console.log("token is valid");
    next();
  });
}

module.exports =  authenticated;