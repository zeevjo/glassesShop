const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

//updates the Inventory Quantity and returns array of snapshots of the Inventory Table
const UpdateItemQuantityInInventory = async (
  arrayOfProductsItemIdFromInventory
) => {
  const pool = await poolPromise;
  const Results = [];

  for (const obj of arrayOfProductsItemIdFromInventory) {
    const arr = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const result = await pool
          .request()
          .input("Id", mssql.Int, obj[key])
          .execute("UpdateInventoryAccordingToOrder");

        console.log("UpdateItemQuantityInInventory", result);

        if (result.recordset[0].Quantity >= 1) {
          result.recordset[0].InStock = true;
          arr.push(result.recordset[0]);
        } else {
          result.recordset[0].InStock = false;
          arr.push(result.recordset[0]);
        }
      }
    }

    Results.push(...arr);
  }

  console.log("Results array:", Results);
  return Results;
};

module.exports = {
  UpdateItemQuantityInInventory,
};
