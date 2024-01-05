const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getAllUserNames = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("GetAllUserNames");

  console.log("i'm the GetAllUserNames",result.recordset);
  return result.recordset;
};

module.exports = {
  getAllUserNames
};
