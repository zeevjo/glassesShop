// const myRepository = require("../DB/colors");
const express = require("express");
var nodemailer = require("nodemailer");
var transporter = require("../emailConfig/emailConfig")
const router = express.Router();
const htmlTemplates = require("../htmlTemplates/signup");
require("dotenv").config();

router.post("/signup", async (req, res) => {
  var mailOptions = {
    from: process.env.MY_EMAIL_ADDRESS,
    to: req.body.address,
    subject: "Welcome to JOSEPH Glasses Shop - Begin Your Stylish Journey!",
    html: htmlTemplates.sginupWelcomeMail,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send(info.response);
    }
  });
});

router.post("/order", async (req, res) => {
  var mailOptions = {
    from: process.env.MY_EMAIL_ADDRESS,
    to: req.body.address,
    subject: "Welcome to JOSEPH Glasses Shop - Begin Your Stylish Journey!",
    html: htmlTemplates.orderEmailTemplate,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send(info.response);
    }
  });
});

module.exports = router;
