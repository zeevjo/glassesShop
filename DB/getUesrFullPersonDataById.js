const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getUesrFullPersonDataById = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("Id",mssql.Int, req.body.Id)
    .execute("getUesrFullPersonDataById");

  console.log("i'm the getUesrFullPersonDataById",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getUesrFullPersonDataById
};