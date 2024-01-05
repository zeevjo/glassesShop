const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getUsersLastOrederId = async (UserId) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("UserId",mssql.Int, UserId)
    .execute("getUsersLastOrederId");

  console.log("in getUsersLastOrederId",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getUsersLastOrederId
};