const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");


const checkIfItemsAreInstock = async (arr) => {
  const pool = await poolPromise;
  const arrOfInvntoryIdAndQuantity = [];
  for (const obj of arr) {
    const id = obj.Id;

    const request = pool.request();
    request.input("Id", mssql.Int, id);
    const result = await request.execute("checkIfItemsAreInstock");

    const resultValue = result.recordset[0].Quantity; // Replace "Value" with the actual field name

    // Create an object with the Id and the result value
    const resultObject = {
      Id: id,
      Quantity: resultValue,
    };

    arrOfInvntoryIdAndQuantity.push(resultObject);
  }

  ////////////////////////////////////////////////////////////////

  console.log('arrOfInvntoryIdAndQuantity in checkIfItemsAreInstock',arrOfInvntoryIdAndQuantity);
  return arrOfInvntoryIdAndQuantity;
};

module.exports = {
  checkIfItemsAreInstock
};