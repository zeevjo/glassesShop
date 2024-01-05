const myRepository = require("../DB/LogIn");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();


router.post("/", async (req, res) => {

  let responseFromDb = await myRepository.LogIn(req);
  console.log("Router posted data on db", responseFromDb);


  //if username and password exists in db create new jwt with userole
  //in the front end we wil render the relevant content according to the user_role

// change this
 res.send(responseFromDb)
})



module.exports = router;