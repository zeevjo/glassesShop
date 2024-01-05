const jwt = require("jsonwebtoken");
require("dotenv").config();

const getUserRoleFromToken = (token) => {
  const decodedToken = jwt.decode(token);
  console.log("im the decodedToken", decodedToken);
  const User_Role = decodedToken.User_Role;

  return User_Role;
};

const getUserNameFromToken = (token) => {
  const decodedToken = jwt.decode(token);
  const User_Name = decodedToken.User_Name;

  return User_Name;
};

module.exports = { getUserRoleFromToken, getUserNameFromToken };
