const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const addRowToInventory = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("ProductTypeId",mssql.Int, req.body.ProductTypeId)
    .input("AssociatedProductId",mssql.Int, req.body.AssociatedProductId)
    .input("Quantity",mssql.Int, req.body.Quantity)
    .execute("addRowToInventory");

  console.log("i'm the addRowToInventory",result);
  return result;
};

const addMultiRowsToInventory = async (productTypeId, minAssociatedProductId, maxAssociatedProductId) => {
  for (let i = minAssociatedProductId; i <= maxAssociatedProductId; i++) {
    // Generate a random quantity between 0 and 10
    const quantity = Math.floor(Math.random() * 11);

    const pool = await poolPromise;
    const result = await pool
    .request()
    .input("ProductTypeId", mssql.Int, productTypeId)
    .input("AssociatedProductId", mssql.Int, i)
    .input("Quantity", mssql.Int, quantity)
    .execute("addRowToInventory");

    //console.log(`Updated row with ProductTypeId: ${productTypeId}, AssociatedProductId: ${i}, Quantity: ${quantity}`);
  }
  //console.log("end of addMultiRowsToInventory");
};

module.exports = {
  addRowToInventory,
  addMultiRowsToInventory
};



