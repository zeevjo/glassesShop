const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const GetContactLensesByDetails = async (
  Cylinder_Size,
  Prescription_Strength_Size,
  Expiry_Date_Name
) => {
  // console.log("in GetContactLensesByDetails 1", itemType, itemId);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("Cylinder_Size", mssql.Float, Cylinder_Size)
    .input(
      "Prescription_Strength_Size",
      mssql.Float,
      Prescription_Strength_Size
    )
    .input("Expiry_Date_Name", mssql.NVarChar, Expiry_Date_Name)
    .execute("GetContactLensesByDetails");

  console.log(" in GetContactLensesByDetails 2", result.recordset[0]);
  return result.recordset[0];
};

const GetLensesByDetails = async (
  Lens_Coating_Name,
  Thickness_Size,
  Cylinder_Size,
  Prescription_Strength_Size
) => {
  // console.log("in GetLensesByDetails 1", itemType, itemId);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("Lens_Coating_Name", mssql.NVarChar, Lens_Coating_Name)
    .input("Thickness_Size", mssql.Float, Thickness_Size)
    .input("Cylinder_Size", mssql.Float, Cylinder_Size)
    .input(
      "Prescription_Strength_Size",
      mssql.Float,
      Prescription_Strength_Size
    )
    .execute("GetLensesByDetails");
  console.log(" in GetLensesByDetails 2", result.recordset[0]);
  return result.recordset[0];
};

module.exports = {
  GetContactLensesByDetails,
  GetLensesByDetails,
};
