const myRepository = require("../DB/order");
const express = require("express");
const jwt = require("jsonwebtoken");
const getTokenFromHeaders = require("../utils/JWT/getTokenFromHeaders")
const authenticated = require("../utils/JWT/authenticated");
const {getUserByUserName} = require('../DB/getUserByUserName')
const router = express.Router();
require("dotenv").config();

router.post("/online",authenticated, async (req, res) => {
  const orderType = {
    inHose: 1,
    online: 2,
  };

    //get decode user info from jwt token
    const token = getTokenFromHeaders(req);
    const decodedToken = jwt.decode(token);
  
    //get the user from db by user name
    req.body.User_Name = decodedToken.User_Name;
    const clientUser = await getUserByUserName(req);
    console.log("clientUser",clientUser);
  
  //this is a post req
  //since we need to pass data to the db in the body
  //even do the action is to get the user
  let responseFromDb = await myRepository.order(req, orderType.online, clientUser);

  res.json(responseFromDb);
});


router.post("/inHose",authenticated, async (req, res) => {
  const orderType = {
    inHose: 1,
    online: 2,
  };

const User_Roles = {
    EMPLOYEE: 1,
    ONER: 2,
    CUSTOMER: 3
  }

  const token = getTokenFromHeaders(req);
  const decodedToken = jwt.decode(token);
  console.log(" am the mf decodedToken", decodedToken);
  //check User_Role
  if (decodedToken.User_Role === User_Roles.EMPLOYEE) {

    const clientUser = await getUserByUserName(req);
    console.log("clientUser",clientUser);
    let responseFromDb = await myRepository.order(req, orderType.inHose, clientUser);

    res.json(responseFromDb);
  }  else {
    res.send("not authorized");
  }
});

module.exports = router;