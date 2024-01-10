const myRepository = require("../DB/dbLoader");
const myRepository2 = require('../DB/addRowToInventory')
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
try {
  let db_response_drop_and_insert_sp = await myRepository.db_drop_and_insert_sp();
  console.log("Router posted data on db", db_response_drop_and_insert_sp);

  let db_response_INSERT_ALL_GALLRY_URLS = await myRepository.INSERT_ALL_GALLRY_URLS();
  console.log("Router posted data on db", db_response_INSERT_ALL_GALLRY_URLS);

  let db_response_INSERT_ALL_Colors_URLS = await myRepository.INSERT_ALL_Colors_URLS();
  console.log("Router posted data on db", db_response_INSERT_ALL_Colors_URLS);

  let db_response_insert_all_Glasses = await myRepository.insert_all_Glasses();
  console.log("Router posted data on db", db_response_insert_all_Glasses);

  let db_response_insert_all_options_Contact_lenses = await myRepository.insert_all_options_Contact_lenses();
  console.log("Router posted data on db", db_response_insert_all_options_Contact_lenses);

  let db_response_insert_ALL_lenses_data = await myRepository.insert_ALL_lenses_data();
  console.log("Router posted data on db", db_response_insert_ALL_lenses_data);

  let db_response_insert_inventory = await myRepository.insert_inventory();
  console.log("Router posted data on db", db_response_insert_inventory);

  // let loadLensestoInvntory = await myRepository2.addMultiRowsToInventory( 2 ,1 ,84688  );
  // console.log('loadLensestoInvntory',loadLensestoInvntory);

  // let loadContactLensesInvntory = await myRepository2.addMultiRowsToInventory(3 ,1, 24200 );
  // console.log('loadLensestoInvntory',loadContactLensesInvntory);


  console.log("db was loaded successfully");
  res.send("db was loaded successfully");

} catch (error) {
  res.send("error", error);
}
});

module.exports = router;
