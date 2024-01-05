const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const db_drop_and_insert_sp = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("db-drop-and-insert-sp");
  console.log("in db_drop_and_insert_sp",result);
  return result;
};

const INSERT_ALL_GALLRY_URLS = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("INSERT-ALL-GALLRY-URLS");
  console.log("in INSERT_ALL_GALLRY_URLS",result);
  return result;
};

const INSERT_ALL_Colors_URLS = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("INSERT-ALL-Colors-URLS");
  console.log("in INSERT_ALL_Colors_URLS",result);
  return result;
};

const insert_all_Glasses = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("insert-all-Glasses");
  console.log("in insert_all_Glasses",result);
  return result;
};


const insert_all_options_Contact_lenses = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("insert-all-options-Contact-lenses");
  console.log("in insert_all_options_Contact_lenses",result);
  return result;
};

const insert_ALL_lenses_data = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("INSERT-ALL-lenses-data");
  console.log("in insert_ALL_lenses_data",result);
  return result;
};

const insert_inventory = async () => {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .execute("INSERT-Inventory");
  console.log("in insert_inventory",result);
  return result;
};

module.exports = {
  db_drop_and_insert_sp,
  INSERT_ALL_GALLRY_URLS,
  INSERT_ALL_Colors_URLS,
  insert_all_Glasses,
  insert_all_options_Contact_lenses,
  insert_ALL_lenses_data,
  insert_inventory
};