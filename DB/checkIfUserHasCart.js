const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const checkIfUserHasCart = async (user) => {

  console.log("in checkIfUserHasCart", user);
  console.log(user.Id);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("UserId",mssql.Int, user.Id)
    .execute("checkIfUserHasCart");

  console.log("i'm the user",result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  checkIfUserHasCart
};