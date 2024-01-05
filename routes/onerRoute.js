const myRepository1 = require("../DB/updateUserRole");
const myRepository2 = require("../DB/UpdateTableOnOwnerRoleChange");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authenticated = require("../utils/JWT/authenticated");
const { getUserRoleFromToken } = require("../utils/JWT/getUserRoleFromToken");
require("dotenv").config();
const getTokenFromHeaders = require("../utils/JWT/getTokenFromHeaders");
const myRepository3 = require("../DB/UpdateEmployee");
const myRepository4 = require('../DB/UpdateCustomer');
const { getUserByUserName } = require("../DB/getUserByUserName");

//type of query is put since we are updating only the user role

// authenticated,

//  http://localhost:4010/oner
//  Authorization Bearer Token
//  {
//   "User_Name": "the-user-name",
//   "User_Role_Type_Id": the-user-role-type-id
//  }

router.put("/", authenticated, async (req, res) => {
  const token = getTokenFromHeaders(req);
  const decodedToken = jwt.decode(token);
  console.log("decodedToken", decodedToken);

  let user = await getUserByUserName(req);
  console.log("user in oner", user);

  const User_Roles = {
    Employees: 1,
    Oner: 2,
    Customers: 3,
  };

  //get user role from token
  const User_Role = getUserRoleFromToken(token);
  console.log("User_Role", User_Role);
  //if role is good, udpate user role
  if (User_Role === User_Roles.Oner) {
    let responseFromDb = await myRepository1.updateUserRole(req);

    const UpdateTableOnOwnerRoleChangeInfo = {
      People_Id: user.People_Id,
      Table_Type: req.body.User_Role_Type_Id,
      Previous_Table_Type: user.User_Role_Type_Id,
    };
    console.log("UpdateTableOnOwnerRoleChangeInfo",UpdateTableOnOwnerRoleChangeInfo);

    let response = await myRepository2.UpdateTableOnOwnerRoleChange(
      UpdateTableOnOwnerRoleChangeInfo
    );

    console.log("response",response);
    res.json(responseFromDb);
  } else {
    res.sendStatus("user not authorized");
  }
});














router.put("/UpdateEmployee", authenticated, async (req, res) => {
  const token = getTokenFromHeaders(req);

  const User_Role = getUserRoleFromToken(token);

  const User_Roles = {
    Employees: 1,
    Oner: 2,
    Customers: 3,
  };

  if (User_Role === User_Roles.Oner) {
    let response = await myRepository3.UpdateEmployee(req);
    res.json(response);
  } else {
    res.sendStatus("user not authorized");
  }
});

router.put("/UpdateCustomer", authenticated, async (req, res) => {
  const token = getTokenFromHeaders(req);

  const User_Role = getUserRoleFromToken(token);

  const User_Roles = {
    Employees: 1,
    Oner: 2,
    Customers: 3,
  };

  if (User_Role === User_Roles.Oner) {
    let response = await myRepository4.UpdateCustomer(req);
    res.json(response);
  } else {
    res.sendStatus("user not authorized");
  }
});


module.exports = router;


