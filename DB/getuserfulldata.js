const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getuserfulldata = async (req, Id = -1) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("UserId", mssql.Int, req.body.UserId || Id)
    .execute("GETUSERSFULLDATA");

  console.log("i'm the user", result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getuserfulldata,
};
