const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const ClearUserCartByUserId = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("UserId", mssql.Int, req.body.UserId)
    .execute("ClearUserCartByUserId");

  console.log("i'm the ClearUserCartByUserId", result);
  return result;
};

module.exports = {
  ClearUserCartByUserId,
};