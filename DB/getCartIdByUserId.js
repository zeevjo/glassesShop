const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getCartIdByUserId = async (UserId) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("UserId",mssql.Int, UserId)
    .execute("getCartIdByUserId");

  console.log("i'm the user",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getCartIdByUserId
};
