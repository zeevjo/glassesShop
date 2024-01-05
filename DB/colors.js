const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const colors = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("get-all-colors");
  // console.log("i'm the colors",result.recordset);
  return result.recordset;
};
 
module.exports = {
  colors
};