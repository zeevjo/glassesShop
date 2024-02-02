const myRepository = require("../DB/Cart");
const myRepository2 = require("../DB/getCartIdByUserId");
const myRepository3 = require("../DB/transferCartItems");
const authenticated = require("../utils/JWT/authenticated");
const myRepository4 = require("../DB/clearUserCartByUserId");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const getTokenFromHeaders = require("../utils/JWT/getTokenFromHeaders");
require("dotenv").config();

router.get("/getAllItemsInCart", authenticated, async (req, res) => {
  //  console.log(req.params.itemId, req.params.itemType);
  const token = getTokenFromHeaders(req);
  const decodedToken = jwt.decode(token);

  let responseFromDb = await myRepository.getAllItemsInCart(
    req,
    decodedToken.User_Name
  );
  console.log("Router posted data on db", responseFromDb);

  res.send(responseFromDb);
});

router.get(
  "/addItemToCart/:itemType/:itemId",
  authenticated,
  async (req, res) => {
    const token = getTokenFromHeaders(req);
    const decodedToken = jwt.decode(token);

    console.log(decodedToken);
    let responseFromDb = await myRepository.addItemToCart(
      req,
      req.params.itemType,
      req.params.itemId,
      decodedToken.User_Name
    );
    console.log("Router posted data on db", responseFromDb);

    res.send(responseFromDb);
  }
);

//insert the itemType, the itemId is the num of the //AssociatedProductId in Invntory Table (its the same num is the actoal prodact id)
router.delete(
  "/deleteItemFromCart/:itemType/:itemId",
  authenticated,
  async (req, res) => {
    const token = getTokenFromHeaders(req);
    const decodedToken = jwt.decode(token);

    let responseFromDb = await myRepository.deleteItemFromCart(
      req,
      req.params.itemType,
      req.params.itemId,
      decodedToken.User_Name
    );
    console.log("Router delete data on db", responseFromDb);

    res.send(responseFromDb);
  }
);

router.delete(
  "/deleteAllItemsByCartId/:CartId",
  authenticated,
  async (req, res) => {
    let responseFromDb = await myRepository.DeleteCartItemsByCartIdForFornt(
      req.params.CartId
    );
    console.log("Router delete data on db", responseFromDb);

    res.send(responseFromDb);
  }
);

router.delete("/deleteAllItemsByUserId", authenticated, async (req, res) => {
  let responseFromDb = await myRepository4.ClearUserCartByUserId(
    req
  );
  console.log("Router delete data on db", responseFromDb);

  res.send(responseFromDb);
});

router.get("/getCartIdByUserId/:UserId", authenticated, async (req, res) => {
  let responseFromDb = await myRepository2.getCartIdByUserId(req.params.UserId);
  console.log("Router delete data on db", responseFromDb);

  res.send(responseFromDb);
});

router.post("/transferCartItems", authenticated, async (req, res) => {
  let responseFromDb = await myRepository3.transferCartItems(req);
  console.log("Router delete data on db", responseFromDb);

  res.send(responseFromDb);
});

module.exports = router;

//myRepository2
