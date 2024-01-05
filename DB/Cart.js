const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");
const { checkIfUserHasCart } = require("./checkIfUserHasCart");
const { getUserByUserName } = require("./getUserByUserName");
const { createUsaerCart } = require("./createUsaerCart");
const {
  getProductItemIdFromInventory,
} = require("./getProductItemIdFromInventory");

//MAKE SHORE THAT THE DB IS FULL!!

const getAllItemsInCart = async (req, User_Name) => {
  req.body.User_Name = User_Name;

  //get user details
  const user = await getUserByUserName(req);

  //check if user has a Cart
  const hasCart = await checkIfUserHasCart(user);

  if (hasCart) {
    //get all rows from Cart_Items table by UserId
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("UserId", mssql.Int, user.Id)
      .execute("getAllCartItemsByUserId");

    //store result in array
    let arrayOfCartItems = result.recordsets[0];
    let arrayOfItemsInfoFromTable = []; //array to store the results

    //loop over the array and get items details from tabels
    for (const object of arrayOfCartItems) {
      if (object.hasOwnProperty("product_Id")) {
        const itemResult = await pool
          .request()
          .input("product_Id", mssql.Int, object.product_Id)
          .execute("getItemsInfoFromTableByInventoryId");

        const itemsInfo = itemResult.recordsets[0];
        arrayOfItemsInfoFromTable.push(...itemsInfo);
      }
    }
    //Obj for help
    const Product_Type = {
      Glasses: 1,
      Lenses: 2,
      Contact_Lenses: 3,
    };
  
    //geting exact info and details of every item
    let arrayOfItemsFullDetails = []; //array to store the results

    for (const object of arrayOfItemsInfoFromTable) {
      if (object.hasOwnProperty("Product_Type_Id")) {
        switch (object.Product_Type_Id) {
          case Product_Type.Glasses:
            const result1 = await pool
              .request()
              .input("itemId", mssql.Int, object.Id)
              .execute("getGlassesItemById");
            const itemsInfo1 = result1.recordsets[0];
            arrayOfItemsFullDetails.push(...itemsInfo1);
            break;

          case Product_Type.Lenses:
            const result2 = await pool
              .request()
              .input("itemId", mssql.Int, object.Id)
              .execute("getLensesItemById");
            const itemsInfo2 = result2.recordsets[0];
            arrayOfItemsFullDetails.push(...itemsInfo2);
            break;

          case Product_Type.Contact_Lenses:
            const result3 = await pool
              .request()
              .input("itemId", mssql.Int, object.Id)
              .execute("getContact_LensesItemById");
            const itemsInfo3 = result3.recordsets[0];
            arrayOfItemsFullDetails.push(...itemsInfo3);
            break;

          default:
            break;
        }
      }
    }

    return arrayOfItemsFullDetails;
  }
};

const addItemToCart = async (req, itemType, itemId, User_Name) => {
  //the get getUserByUserName() only expects the req so i need to
  //insert the User_Name into the req before calling getUserByUserName()
  console.log("wtf", itemType, itemId, User_Name);
  req.body.User_Name = User_Name;

  const pool = await poolPromise;

  const user = await getUserByUserName(req);
  console.log("ypppppppppppppppppppppp", user);

  const hasCart = await checkIfUserHasCart(user);
  console.log("im the hasCart", hasCart);

  const ProductItemIdFromInventory = await getProductItemIdFromInventory(
    itemType,
    itemId
  );
  console.log(ProductItemIdFromInventory);

  if (hasCart) {
    //add item to cart
    const insertIntoCartInfo = {
      CartId: hasCart.CartId,
      inventoryItemId: ProductItemIdFromInventory.Id,
    };

    const result1 = await pool
      .request()
      .input("CartId", mssql.Int, insertIntoCartInfo.CartId)
      .input("inventoryItemId", mssql.Int, insertIntoCartInfo.inventoryItemId)
      .execute("insertIntoCartItems");
    return result1.recordsets[0];
  } else {
    // make a cart for user
    createUsaerCart(user);

    // get the new cart id
    const hasCart = await checkIfUserHasCart(user);

    console.log("has cart in else ", hasCart);

    const ProductItemIdFromInventory = await getProductItemIdFromInventory(
      itemType,
      itemId
    );

    console.log("yoyo", ProductItemIdFromInventory);
    const insertIntoCartInfo = {
      CartId: hasCart.CartId,
      inventoryItemId: ProductItemIdFromInventory.Id,
    };
    //insert item into cart

    const result1 = await pool
      .request()
      .input("CartId", mssql.Int, insertIntoCartInfo.CartId)
      .input("inventoryItemId", mssql.Int, insertIntoCartInfo.inventoryItemId)
      .execute("insertIntoCartItems");
    return result1.recordsets[0];
  }
};

const deleteItemFromCart = async (req, itemType, itemId, User_Name) => {
  const pool = await poolPromise;
  req.body.User_Name = User_Name;

  const user = await getUserByUserName(req);

  const hasCart = await checkIfUserHasCart(user);
  console.log("hasCart you you you", hasCart);

  const ProductItemIdFromInventory = await getProductItemIdFromInventory(
    itemType,
    itemId
  );

  const insertIntoCartInfo = {
    CartId: hasCart.CartId,
    inventoryItemId: ProductItemIdFromInventory.Id,
  };
  console.log("test test", insertIntoCartInfo);
  const result = await pool
    .request()
    .input("CartId", mssql.Int, insertIntoCartInfo.CartId)
    .input("inventoryItemId", mssql.Int, insertIntoCartInfo.inventoryItemId)
    .execute("deleteItemFromCart");
  return result;
};

const DeleteCartItemsByCartIdForFornt = async (Cart_Id) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("Cart_Id",mssql.Int, Cart_Id)
    .execute("DeleteCartItemsByCartIdForFornt");

  console.log("in DeleteCartItemsByCartIdForFornt",result);
  return result;
};

module.exports = {
  getAllItemsInCart,
  addItemToCart,
  deleteItemFromCart,
  DeleteCartItemsByCartIdForFornt
};