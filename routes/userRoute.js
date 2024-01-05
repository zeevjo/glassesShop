const myRepository = require("../DB/getUserByUserName");
const myRepository2 = require("../DB/getAllUserNames");
const myRepository3 = require("../DB/getUesrFullPersonDataById");
const myRepository4 = require("../DB/getuserfulldata");
const myRepository5 = require("../DB/getMaxIndexFromUsersTable");
const express = require("express");
const jwt = require("jsonwebtoken");
const authenticated = require("../utils/JWT/authenticated");
const getTokenFromHeaders = require("../utils/JWT/getTokenFromHeaders")
const router = express.Router();
require("dotenv").config();

router.post("/", async (req, res) => {
  //this is a post req
  //since we need to pass data to the db in the body
  //even do the action is to get the user
  let responseFromDb = await myRepository.getUserByUserName(req);

  res.json(responseFromDb);
});

router.get("/getAllUserNames", async (req, res) => {
  //this is a post req
  //since we need to pass data to the db in the body
  //even do the action is to get the user
  let responseFromDb = await myRepository2.getAllUserNames();

  res.json(responseFromDb);
});

router.post("/getUesrFullPersonDataById", async (req, res) => {
  //this is a post req
  //since we need to pass data to the db in the body
  //even do the action is to get the user
  let responseFromDb = await myRepository3.getUesrFullPersonDataById(req);

  res.json(responseFromDb);
});

router.get("/getuserfulldata", async (req, res) => {
  let responseFromDb = await myRepository4.getuserfulldata(req);

  res.json(responseFromDb);
});

router.get("/getuserfulldataofallusers", authenticated, async (req, res) => {

  const User_Roles = {
    EMPLOYEE: 1,
    ONER: 2,
    CUSTOMER: 3
  }

  const token = getTokenFromHeaders(req);
  const decodedToken = jwt.decode(token);

  if (decodedToken.User_Role === User_Roles.ONER) {
    let responseFromDb1 = await myRepository5.getMaxIndexFromUsersTable();

    let maxindex = responseFromDb1.MaxIndex;

    let arr = [];
    if (maxindex != undefined) {
      for (let index = 1; index <= maxindex; index++) {
        let responseFromDb2 = await myRepository4.getuserfulldata(req, index);
        arr.push(responseFromDb2);
      }
    }

    // for (let index = 0; index < ; index++) {
    //   const element = array[index];

    // }
    // let responseFromDb2 = await myRepository5.getuserfulldata(req);

    res.json(arr);
  }
});

module.exports = router;
