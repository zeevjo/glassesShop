const myRepository = require("../DB/SignUp");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();
const generateAccsesToken = require("../utils/JWT/generateAccsesToken");

router.post("/", async (req, res) => {
  try {
    let responseFromDb = await myRepository.SignUp(req);
    console.log("Router posted data on db", responseFromDb);

    //==== JWT
    let authToken = "empty";
    if (responseFromDb) {
      const User_Name = req.body.User_Name;
      //the default userRole is 3 === customer role
      const User_Role = 3;
      const user = {
        User_Name: User_Name,
        User_Role: User_Role,
      };

      const accsestoken = generateAccsesToken(user);

      authToken = accsestoken;
    }

    const responseData = {
      authToken: authToken,
      databaseData: responseFromDb,
    };

    console.log("responseData", responseData);
    res.json(responseData);
  } catch (err) {
    console.log("there was an error while calling myRepository.SignUp()", err);
  }
});

module.exports = router;
