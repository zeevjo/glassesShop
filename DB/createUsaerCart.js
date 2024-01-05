const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const createUsaerCart = async (user) => {

  console.log("in createUsaerCart", user);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("UserId",mssql.Int, user.Id)
    .execute("createUsaerCart");

    console.log(result);
  console.log("i'm the user",result.recordsets[0]);
  return result.recordsets[0];
};

module.exports = {
  createUsaerCart
};