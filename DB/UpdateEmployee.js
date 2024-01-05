const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const UpdateEmployee = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("People_Id",mssql.Int, req.body.People_Id)
    .input("Salary",mssql.Int, req.body.Salary)
    .input("DaysOff",mssql.Int, req.body.DaysOff)
    .input("SickDays",mssql.Int, req.body.SickDays)
    .input("JobStatusNameTypeId",mssql.Int, req.body.JobStatusNameTypeId)
    .execute("UpdateEmployee"); 

  console.log("in UpdateEmployee",result);
  return result;
};

module.exports = {
  UpdateEmployee
};