const repo = require("../utils/JWT/authenticated");
const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log("yoyo im the user", user);
    if (err) {
      console.log("authenticated err", err);
      return res.send(false);
    }
    req.user = user;
    console.log("token is valid");
    res.send(true);
  });
});

module.exports = router;
