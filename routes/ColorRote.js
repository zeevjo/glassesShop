const myRepository = require("../DB/colors");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/getAllColors", async (req, res) => {
  let responseFromDb = await myRepository.colors();

  if (responseFromDb) {
    console.log("Router: getAllItemsByItemType -- all colors");
  } else {
    console.log("Router: getAllItemsByItemType -- all colors", responseFromDb);
  }

  res.send(responseFromDb);
});

module.exports = router;
