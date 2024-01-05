const express = require("express");

function getTokenFromHeaders(req) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  console.log("im the token in router.put", token);

  return token;
}

module.exports = getTokenFromHeaders;