const mssql = require("mssql");
require("dotenv").config();

// const sqlConfig = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PWD,
//   database: process.env.DB_NAME,
//   server: "localhost",
//   port: 1433,
//   pool: {
//     max: 40,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//   },
// };
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER_NAME,
  port: 1433,
  pool: {
    max: 40,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
    // Increase the query timeout to a value that suits your needs (in milliseconds)
    requestTimeout: 600000, // For example, set to 10 minutes
  },
};

const poolPromise = new mssql.ConnectionPool(sqlConfig).connect();


/**
 * log connection to db status
 */
async function connectToDBTester(poolPromise) {
  try {
    const pool = await poolPromise;
    console.log("Connected to DB Successfully");
  } catch (error) {
    console.error("Database Connection Failed!", error);
  }
}

connectToDBTester(poolPromise);

module.exports = poolPromise;