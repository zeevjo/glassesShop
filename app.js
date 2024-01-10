var express = require("express");
var app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const sp = require("./module");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

const poolPromise = require("./sqlConfig/sqlConfig");

const root = require("path").join(__dirname, "build");
app.use(express.static(root));
// app.get("*", cors(), (req, res) => {
//     res.sendFile('index.html', { root });
// })

//=========================
const SignUpRoute = require("./routes/SignUpRoute");
app.use("/SignUp", SignUpRoute);

//========================
const LogInRoute = require("./routes/LogInRoute");
app.use("/LogIn", LogInRoute);

//========================
const user = require("./routes/userRoute");
app.use("/user", user);

//========================
const oner = require("./routes/onerRoute");
app.use("/oner", oner);

//========================
const shop = require("./routes/ShopRotes");
app.use("/shop", shop);

//=========================
const Color = require("./routes/ColorRote");
app.use("/Color", Color);

//=========================
const cart = require("./routes/cartRoutes");
app.use("/cart", cart);

//========================

const order = require("./routes/orderRoutes");
app.use("/order", order);

//========================

const inventory = require("./routes/inventoryRoutes");
app.use("/inventory", inventory);

//========================
const dbLoader = require("./routes/dbLoader");
app.use("/dbLoader", dbLoader);

//========================
const manufacturer = require("./routes/manufacturer");
app.use("/manufacturer", manufacturer);

//========================

const mailTest = require("./routes/mailRoutes");
app.use("/mail", mailTest);

//========================

//test to make sure the authenticated workes
const x = require("./routes/test");
const { log } = require("console");
app.use("/test", x);
//========================

app.get("/tttt", (req, res) => {
  // console.log(xx);
  res.json(resultArray);
});

app.get("/testdb", async (req, res) => {
  const pool = await poolPromise;

  const getCarById = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await pool.connect()
            try {
                let results = await myConnectionPoolToDB.query(sp)//where id = ? OR id = ?`, (theId, theId + 2))
                console.log(results);
                resolve(results);
            }
            catch (err) {
                console.log("there was an error while sending query to DB ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('ERROR CONNECTION TO DB: ', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    })
}

getCarById()
  res.send("success");
});

app.get("*", cors(), (req, res) => {
  res.sendFile("index.html", { root });
});
//================================================================
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`My app is listening on port:: ${port}!`);
});
//================================================================
