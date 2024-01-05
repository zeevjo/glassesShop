const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");



const getMaxIndexFromUsersTable = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("GETMAXINDEXFROMUSERSTABLE");

  console.log("i'm the GETMAXINDEXFROMUSERSTABLE",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getMaxIndexFromUsersTable
};