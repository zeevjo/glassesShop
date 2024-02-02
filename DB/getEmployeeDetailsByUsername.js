const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getEmployeeDetailsByUsername = async (employeeUserName) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("Username",mssql.NVarChar, employeeUserName)
    .execute("GetEmployeeDetailsByUsername");

  console.log("i'm the GetEmployeeDetailsByUsername",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getEmployeeDetailsByUsername
};
