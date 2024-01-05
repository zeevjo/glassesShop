const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const getContactLensIdByColumnValues = async (req) => {

  console.log(req.body.CylinderId);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("CylinderId", mssql.Int, req.body.CylinderId)
    .input(
      "PrescriptionStrengthId",
      mssql.Int,
      req.body.PrescriptionStrengthId
    )
    .input("ExpiryDate", mssql.Int, req.body.ExpiryDate)
    .execute("getContactLensIdByColumnValues");

  return result;
};

module.exports = {
  getContactLensIdByColumnValues,
};
