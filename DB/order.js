const mssql = require("mssql");
const jwt = require("jsonwebtoken");
const poolPromise = require("../sqlConfig/sqlConfig");
const { getUserByUserName } = require("./getUserByUserName");
const {
  getProductItemIdFromInventory,
} = require("./getProductItemIdFromInventory");
const getTokenFromHeaders = require("../utils/JWT/getTokenFromHeaders");
const { getAllItemsInCart } = require("./Cart");
const { getUsersLastOrederId } = require("./getUsersLastOrederId");
const { getCartIdByUserId } = require("./getCartIdByUserId");
const { DeleteCartItemsByCartId } = require("./DeleteCartItemsByCartId");
const {
  UpdateItemQuantityInInventory,
} = require("./UpdateItemQuantityInInventory");
const {checkIfItemsAreInstock} = require('./checkIfItemsAreInstock')
const {
  addRowToInventory,
  addMultiRowsToInventory,
} = require("./addRowToInventory");
const {orderFromManufacturerIfNotInStock} = require('./orderFromManufacturerIfNotInStock')
// const orderType = require('../constants/test');

const order = async (req, orderType, clientUser) => {
  //get decode user info from jwt token
  const token = getTokenFromHeaders(req);
  const decodedToken = jwt.decode(token);

  //get the user from db by user name
  req.body.User_Name = decodedToken.User_Name;
  const user = await getUserByUserName(req);

  const orderInfo = {
    Id: clientUser.Id,
    Order_Type_Id: orderType,
    Payment_Method_Id: req.body.Payment_Method_Type_Id,
    Payment_Status_Id: req.body.Payment_Status,
  };

  //get all items from cart
  let allCartItems = await getAllItemsInCart(req, //req.body.User_Name
  clientUser.User_Name);

  //allCartItems: an array of objscts, each obj has full data of the item
  console.log("allCartItems", allCartItems);

  const CartItemsToUpdateInvtory =
    processCartItemsToUpdateInvtory(allCartItems);
  //CartItemsToUpdateInvtory: an array of obj, each obj has the type of item an price
  console.log("IM THE CartItemsToUpdateInvtory", CartItemsToUpdateInvtory);

  //total order price
  const total = sumPricesFromArray(CartItemsToUpdateInvtory);
  console.log("Total Price:", total);

  //arrayOfProductsItemIdFromInventory: an array of obj with an Id Fild
  //the value of that fild is the Id of the Product from the cart in the Inventory Table
  const arrayOfProductsItemIdFromInventory = await processCartItems(
    CartItemsToUpdateInvtory
  );
  console.log(
    "arrayOfProductsItemIdFromInventory",
    arrayOfProductsItemIdFromInventory
  );

  const instockResults  = await checkIfItemsAreInstock(
    arrayOfProductsItemIdFromInventory
  );
  console.log("instockResults ", instockResults );

  const orderMissingItemsInStock = await orderFromManufacturerIfNotInStock(instockResults);
  console.log("orderMissingItemsInStock", orderMissingItemsInStock);


  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("User_Id", mssql.Int, //orderInfo.Id
    orderInfo.Id)
    .input("Order_Type_Id", mssql.Int, orderInfo.Order_Type_Id)
    .input("Payment_Method_Id", mssql.Int, orderInfo.Payment_Method_Id)
    .input("Payment_Status_Id", mssql.Int, orderInfo.Payment_Status_Id)
    //.input("Quantity", mssql.Int, orderInfo.Payment_Status_Id)
    .execute("order");

  console.log("test", result);
  // return result;

  let usersLastOrderId = await getUsersLastOrederId(orderInfo.Id);
  console.log(usersLastOrderId.Order_Id);

  arrayOfProductsItemIdFromInventory.forEach(async (item) => {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("Product_Id", mssql.Int, item.Id)
      .input("Order_Id", mssql.Int, usersLastOrderId.Order_Id)
      .execute("Insert_Order_Items");
  });

  //empty user cart
  let usersCartId = await getCartIdByUserId( orderInfo.Id);
  console.log("usersCartId", usersCartId);

  //i got the users cart id now make a sp
  // to delete all cartItems from db of this user

  let howManyRowsAffected = await DeleteCartItemsByCartId(usersCartId.Cart_Id);
  console.log(howManyRowsAffected);

  //update Invntory

  let arrayOfSnapShotFromInvntory = await UpdateItemQuantityInInventory(
    arrayOfProductsItemIdFromInventory
  );
  console.log("im x", arrayOfSnapShotFromInvntory);
  return arrayOfSnapShotFromInvntory;
};

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

function processCartItemsToUpdateInvtory(inputArray) {
  const resultArray = [];

  for (const item of inputArray) {
    let key = "";
    let priceKey = "";
    let orignalKeyName = "";

    if (item.hasOwnProperty("LensId")) {
      key = "Lenses";
      orignalKeyName = "LensId";
    } else if (item.hasOwnProperty("GlassesId")) {
      key = "Glasses";
      orignalKeyName = "GlassesId";
    } else if (item.hasOwnProperty("ContactLensId")) {
      key = "Contact_Lenses";
      orignalKeyName = "ContactLensId";
    }

    if (item.hasOwnProperty("LensPrice")) {
      priceKey = "LensPrice";
    } else if (item.hasOwnProperty("Price")) {
      priceKey = "Price";
    } else if (item.hasOwnProperty("ContactLensPrice")) {
      priceKey = "ContactLensPrice";
    }

    if (key && priceKey) {
      const transformedItem = {
        [key]: item[orignalKeyName],
        Price: item[priceKey],
      };
      resultArray.push(transformedItem);
    }
  }

  return resultArray;
}

function sumPricesFromArray(arr) {
  let totalPrice = 0;

  for (const item of arr) {
    if (item.hasOwnProperty("Price")) {
      totalPrice += parseFloat(item.Price); // Assuming Price is a numeric value
    }
  }

  return totalPrice;
}

async function processCartItems(CartItemsToUpdateInvtory) {
  const arrayOfProductsItemIdFromInventory = [];

  for (const item of CartItemsToUpdateInvtory) {
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        if (key === "Contact_Lenses" || key === "Glasses" || key === "Lenses") {
          const ProductItemIdFromInventory =
            await getProductItemIdFromInventory(key, item[key]);
          arrayOfProductsItemIdFromInventory.push(ProductItemIdFromInventory);
          break;
        }
      }
    }
  }

  // console.log("Resulting array:", arrayOfProductsItemIdFromInventory);
  return arrayOfProductsItemIdFromInventory;
}

function createArrayOfObjects(arrayOfSnapShotFromInvntory) {
  if (!Array.isArray(arrayOfSnapShotFromInvntory)) {
    console.error(
      "arrayOfSnapShotFromInvntory is not an array or is undefined."
    );
    return;
  }
  arrayOfSnapShotFromInvntory.forEach((obj) => {
    const isInStock = obj.InStock ? true : false;
    console.log(isInStock);
    // console.log(obj);
  });
}

// createArrayOfObjects(arrayOfSnapShotFromInvntory);

module.exports = {
  order,
};
