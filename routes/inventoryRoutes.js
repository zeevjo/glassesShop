const myRepository = require("../DB/getProductItemIdFromInventory");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/getProductItemIdFromInventory/:itemType/:itemId", async (req, res) => {

  let itemType = req.params.itemType;
  let itemId = req.params.itemId;
  let responseFromDb = await myRepository.getProductItemIdFromInventory(itemType,itemId);
  console.log("responseFromDb in getProductItemIdFromInventory", responseFromDb);

  res.send(responseFromDb);
});

module.exports = router;    