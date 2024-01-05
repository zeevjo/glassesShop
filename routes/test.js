const myRepository = require("../DB/SignUp");
const myRepository2 = require("../DB/checkIfUserHasCart");
const myRepository3 = require("../DB/addRowToInventory");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();
var path = require("path");
const authenticated = require("../utils/JWT/authenticated");

// add Authorization key to the headers
// add Bearer value + space + jwt token to the value

router.get("/", authenticated, (req, res) => {
  res.send("hello world");
});

// http://localhost:4010/test/hello/kash-color-black-gold-pos-2
router.get("/hello/:id", function (req, res) {
  console.log(
    path.join(
      __dirname,
      `./glassesPic/glasses/brands/SpectraStyle/Eyeglasses/fall/KASH/big-pic/${req.params.id}.jpg`
    )
  );
  res.sendFile(
    path.join(
      __dirname,
      `../glassesPic/glasses/brands/SpectraStyle/Eyeglasses/fall/KASH/big-pic/${req.params.id}.jpg`
    )
  );
  // We shouldn't use this for pdf files,
  //  or any other files that we actually wish to send as a "download"
  // res.sendFile(path.join(__dirname,'./hello.pdf'));
});

router.get("/hello2/:relativePath", function (req, res) {
  const relativePath = decodeURIComponent(req.params.relativePath);
  console.log(relativePath);
  res.sendFile(path.join(__dirname, `..${relativePath}`));

  // We shouldn't use this for pdf files,
  //  or any other files that we actually wish to send as a "download"
  // res.sendFile(path.join(__dirname,'./hello.pdf'));
});


router.get('/checkIfUserHasCart',async function(req, res) {
  let responseFromDb = await myRepository2.checkIfUserHasCart(req.params.itemType);
 console.log("Router got data from db", responseFromDb);
})



//Glasses: 1 - 532
//Lenses: ( 2 ,1 ,84688  )
//Contact_Lenses: ( 3 ,1, 24200 )
router.get('/addMultiRowsToInventory',async function(req, res) {
  let responseFromDb = await myRepository3.addMultiRowsToInventory(3 ,1, 24200 );
  console.log(responseFromDb);
  res.send(responseFromDb);
})

module.exports = router;