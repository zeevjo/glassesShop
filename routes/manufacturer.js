const myRepository = require("../DB/orderFromManufacturerIfNotInStock");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/:Id", async (req, res) => {
  let X = []
  let Id = req.params.Id;
  let responseFromDb = await myRepository.orderFromManufacturerIfNotInStock(X, Id);
  console.log(
    "responseFromDb in orderFromManufacturerIfNotInStock route",
    responseFromDb
  );

  res.send(responseFromDb);
});

module.exports = router;
