const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");
const bcrypt = require("bcrypt");


const saltRounds = 10;


//SignUp
//http://localhost:4000/SignUp

// {
//   "First_Name": "sara",
//   "Last_Name": "joseph",
//   "Email": "john.doe@example.com",
//   "Phone_Number":"123-456-7890",
//   "Profile_Picture": "some-url",
//   "Bday" : "1990-01-01",
//   "User_Name": "saraJoseph",
//   "Password": "fdgd63td",
//   "User_Role_Type_Id": 1,
//   "test": 2
// }
const SignUp = async (req) => {
  try {

    let Password = req.body.Password;
    let hashedPass;

    let bcryptResult = await bcrypt.hash(Password, saltRounds);
    hashedPass = bcryptResult;

    const pool = await poolPromise;
    const result = await pool.request()
    .input("First_Name",mssql.NVarChar, req.body.First_Name)
    .input("Last_Name",mssql.NVarChar, req.body.Last_Name)
    .input("Email",mssql.NVarChar, req.body.Email)
    .input("Phone_Number",mssql.NVarChar, req.body.Phone_Number)
    .input("Profile_Picture",mssql.NVarChar, req.body.Profile_Picture)
    .input("Bday",mssql.Date, req.body.Bday)
    .input("User_Name",mssql.NVarChar, req.body.User_Name)
    .input("Password",mssql.NVarChar, hashedPass)

    // Customer_Rank_Name And User_Role_Type_Id  will be inserted as lowest level be default
    .input("User_Role_Type_Id",mssql.Int, req.body.User_Role_Type_Id)
    // .input("Customer_Rank_Name",mssql.Int, req.body.Customer_Rank_Name)
    .execute("SIGNUP");
    return result
    //.recordsets[0];
  } catch (err) {
    console.log("There was an error while executing the query: ", err);
    throw err;
  }
};

module.exports = {
  SignUp
}