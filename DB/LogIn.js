const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");
const bcrypt = require("bcrypt");
const generateAccsesToken = require("../utils/JWT/generateAccsesToken");
const { getUserByUserName } = require("./getUserByUserName");

//http://localhost:4010/LogIn
// {
//   "User_Name": "saraJoseph",
//   "Password": "1234"
// }

const LogIn = async (req) => {
  // check if user and password exist in db
  console.log(req.body.Password);
  let user = await getUserByUserName(req);

  if (req.body.Password && req.body.User_Name && user === undefined) {
    return ({"userDoseNotExist": "User Dose Not Exist"});
  }
  console.log("i'm the user in log in", user);

  // campre inputed password to hash password with bcrypt
  if (user.Password) {
    const storedHash = user.Password;
    console.log("Stored Hash:", storedHash);

    let result = await bcrypt.compare(req.body.Password, storedHash);
    console.log("Result from bcrypt's check:", result);
  } else {
    console.log("User not found or missing password information.");
  }

  //jenarate a new jwt with the useres role
  console.log("======the user=========", user);

  const UserRoleAndName = {
    User_Role: user.User_Role_Type_Id,
    User_Name: user.User_Name,
    User_Id: user.Id
  };

  let authToken = "empty";
  try {
    const accsestoken = generateAccsesToken(UserRoleAndName);
    authToken = accsestoken;
  } catch (error) {
    console.log("there was a error will cteating the jwt token", error);
  }
  console.log("im the token in log in", authToken);

  //in the front end decode the jwt token and extract the role fild
  //use the role to render relavent components

  // return authToken;
  return {authToken:authToken}
};

module.exports = {
  LogIn,
};
