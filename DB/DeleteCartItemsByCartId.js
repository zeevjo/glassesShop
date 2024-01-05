const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const DeleteCartItemsByCartId = async (CartId) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("CartId",mssql.Int, CartId)
    .execute("DeleteCartItemsByCartId");

  console.log("i'm in DeleteCartItemsByCartId",result.rowsAffected);
  return result.rowsAffected;
};

module.exports = {
  DeleteCartItemsByCartId
};
