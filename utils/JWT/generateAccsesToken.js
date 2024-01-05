const jwt = require("jsonwebtoken");
require("dotenv").config();
const expiresInOneDay = 60 * 60 * 24;

function generateAccsesToken(user) {
  console.log("im the user", user);
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: expiresInOneDay  });
}
 module.exports = generateAccsesToken;


// const expiresInTenSeconds = 10; // 10 seconds

// function generateAccessToken(user) {
//   console.log("I'm the user", user);
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: expiresInTenSeconds });
// }

// module.exports = generateAccessToken;