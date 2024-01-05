const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

//get
// http://localhost:4010/shop/:itemType

const getAllItemsByItemType = async (itemType) => {
  const pool = await poolPromise;

  switch (itemType) {
    case "Sunglasses":
      const result = await pool
        .request()
        .input("ItemType", mssql.NVarChar, itemType)
        .execute("getItemByCategory");
      return result.recordsets[0];
      break;

    case "Eyeglasses":
      const result2 = await pool
        .request()
        .input("ItemType", mssql.NVarChar, itemType)
        .execute("getItemByCategory");
      return result2.recordsets[0];
      break;

    case "Lenses":
      const result3 = await pool.request().execute("getLenses");
      return result3.recordsets[0];
      break;

    case "ContactLenses":
      const result4 = await pool.request().execute("getContactLenses");
      return result4.recordsets[0];
      break;

    default:
      break;
  }
};

const getGlassesById = async (glassId) => {
  console.log(glassId);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("Id",mssql.Int, glassId)
    .execute("GetGlassesById");

  console.log("i'm the GetGlassesById",result.recordset[0]);
  return result.recordset[0];
}

const getAllItemsByModuleName = async (ModuleName) => {
  console.log(ModuleName);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("ModelName",mssql.NVarChar, ModuleName)
    .execute("getAllItemsByModuleName");

  console.log("i'm the getAllItemsByModuleName",result.recordset);
  return result.recordset;
}

const getAllItemsByModuleNameAndCategory = async (ModuleName, CategoryName) => {
  console.log(ModuleName);
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("CategoryName",mssql.NVarChar, CategoryName)
    .input("ModelName",mssql.NVarChar, ModuleName)
    .execute("getAllItemsByModuleNameAndCategory");

  console.log("i'm the getAllItemsByModuleName",result.recordset);
  return result.recordset;
}



module.exports = {
  getAllItemsByItemType,
  getGlassesById,
  getAllItemsByModuleName,
  getAllItemsByModuleNameAndCategory
};
