const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const UpdateCustomer = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("People_Id",mssql.Int, req.body.People_Id)
    .input("Customer_Rank_Name",mssql.Int, req.body.Customer_Rank_Name)
    .execute("UpdateCustomer"); 
  console.log("in UpdateCustomer",result);
  return result;
};

module.exports = {
  UpdateCustomer
};