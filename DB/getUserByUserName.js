const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");


//put
// http://localhost:4010/user
// {
//   "User_Name": "saraJoseph"
// }

const getUserByUserName = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("User_Name",mssql.NVarChar, req.body.User_Name)
    .execute("getUserByUserName");

  console.log("i'm the user",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  getUserByUserName
};
