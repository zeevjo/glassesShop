const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getProductItemIdFromInventory = async (itemType, itemId) => {

  console.log("in getProductItemIdFromInventory 1", itemType, itemId);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("itemType",mssql.NVarChar, itemType)
    .input("itemId",mssql.Int, itemId)
    .execute("getProductItemIdFromInventory");

  console.log(" in getProductItemIdFromInventory 2",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getProductItemIdFromInventory
};