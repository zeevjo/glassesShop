const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const transferCartItems = async (req) => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("FirstUserId",mssql.Int, req.body.FirstUserId)
    .input("SecondUserId",mssql.Int, req.body.SecondUserId)
    .execute("TransferCartItems");

  console.log("i'm the transferCartItems",result);
  return result;
};

module.exports = {
  transferCartItems
};