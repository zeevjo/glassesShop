const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

//put
// http://localhost:4010/user
// {
//   "User_Name": "saraJoseph"
// }

const UpdateTableOnOwnerRoleChange = async (
  UpdateTableOnOwnerRoleChangeInfo
) => {
  console.log(
    "UpdateTableOnOwnerRoleChangeInfo",
    UpdateTableOnOwnerRoleChangeInfo
  );

  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("People_Id", mssql.Int, UpdateTableOnOwnerRoleChangeInfo.People_Id)
    .input("Table_Type", mssql.Int, UpdateTableOnOwnerRoleChangeInfo.Table_Type)
    .input(
      "Previous_Table_Type",
      mssql.Int,
      UpdateTableOnOwnerRoleChangeInfo.Previous_Table_Type
    )
    .execute("UpdateTableOnOwnerRoleChange");

  console.log("i'm the UpdateTableOnOwnerRoleChange", result);
  return result;
};

module.exports = {
  UpdateTableOnOwnerRoleChange,
};
