// const myRepository = require("../DB/colors");
const express = require("express");
var nodemailer = require('nodemailer');
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <title>Welcome to Our Platform!</title>
    <style>
      /* Add your styles here */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
  
      .container {
        width: 80%;
        margin: auto;
        overflow: hidden;
      }
  
      header {
        background: #333;
        color: #fff;
        padding-top: 30px;
        min-height: 70px;
        border-bottom: #ff3300 3px solid;
      }
  
      header h1 {
        padding: 5px 0;
        margin: 0;
      }
  
      .content {
        padding: 20px;
        background: #fff;
        min-height: 300px;
      }
  
      footer {
        padding: 20px;
        color: #fff;
        background: #333;
        text-align: center;
      }
    </style>
  </head>
  
  <body>
    <header>
      <div class="container">
        <h1>Welcome to Our Platform!</h1>
      </div>
    </header>
    <div class="container">
      <div class="content">
        <h2>Hello, [Username]!</h2>
        <p>Welcome back to our platform. You have successfully logged in.</p>
        <p>Current Date: [Current Date]</p>
        <p>Thank you for choosing our service. If you have any questions or need assistance, feel free to contact us.</p>
        <p>Best Regards,</p>
        <p>The Team at [Your Company Name]</p>
      </div>
    </div>
    <footer>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  </body>
  
  </html> 
  `;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'glassesshopproject@gmail.com',
      pass: 'mvaf vgld sdvj qjmu'
    }
  });

  var mailOptions = {
    from: 'glassesshopproject@gmail.com',
    to: 'zevyz3z3@gmail.com',
    subject: 'Sending Email using Node.js',
    // text: 'That was easy!'
    html: htmlTemplate
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send(error)
    } else {
      console.log('Email sent: ' + info.response);
      res.send(info.response)
    }
  });

  

});

module.exports = router;