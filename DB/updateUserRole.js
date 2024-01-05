const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");
const { getUserByUserName } = require("./getUserByUserName");

const updateUserRole = async (req) => {
  let user = await getUserByUserName(req);

  console.log(user);

  //=========================
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("User_Name", mssql.NVarChar, req.body.User_Name)
    .input("User_Role_Type_Id", mssql.Int, req.body.User_Role_Type_Id)
    .execute("updateUserRole");
  return result;
};

module.exports = {
  updateUserRole,
};

// UPDATE USER_ROLE
// 1. make sure you add the token of the oner to the req header
// 2. in the put req body, add a USER_NAME key and value  and a USER_ROLE_TYPE_ID key and value
