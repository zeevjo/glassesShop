const myRepository = require("../DB/Shop");
const myRepository2 = require("../DB/GetContactLensesByDetails");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

  
router.get("/:itemType", async (req, res) => {
  let responseFromDb = await myRepository.getAllItemsByItemType(
    req.params.itemType
  );
  // console.log("Router got data from db", responseFromDb);
  if (responseFromDb) {
      console.log("Router: getAllItemsByItemType -- ",  req.params.itemType);
  } else {
    console.log("Router: getAllItemsByItemType -- ",  responseFromDb);
  }

  res.send(responseFromDb);
});

router.get("/getGlassesById/:Id", async (req, res) => {
  console.log("test", req.params.Id);
  const glassId = req.params.Id;
  let responseFromDb = await myRepository.getGlassesById(glassId);
  console.log("Router got data from db", responseFromDb);

  res.send(responseFromDb);
});

router.get("/getAllItemsByModuleName/:ModuleName", async (req, res) => {
  console.log("test", req.params.ModuleName);
  const ModuleName = req.params.ModuleName;
  let responseFromDb = await myRepository.getAllItemsByModuleName(ModuleName);
  console.log("Router got data from db", responseFromDb);

  res.send(responseFromDb);
});

router.get(
  "/getAllItemsByModuleNameAndCategory/:CategoryName/:ModuleName",
  async (req, res) => {
    console.log("test", req.params.CategoryName);
    console.log("test", req.params.ModuleName);
    const CategoryName = req.params.CategoryName;
    const ModuleName = req.params.ModuleName;
    let responseFromDb = await myRepository.getAllItemsByModuleNameAndCategory(
      ModuleName,
      CategoryName
    );
    console.log("Router got data from db", responseFromDb);

    res.send(responseFromDb);
  }
);

router.post("/getContactLensesByDetails", async (req, res) => {
  const Cylinder_Size = req.body.Cylinder_Size;
  const Prescription_Strength_Size = req.body.Prescription_Strength_Size;
  const Expiry_Date_Name = req.body.Expiry_Date_Name;
  console.log(Expiry_Date_Name, Prescription_Strength_Size, Cylinder_Size);
  let responseFromDb = await myRepository2.GetContactLensesByDetails(
    Cylinder_Size,
    Prescription_Strength_Size,
    Expiry_Date_Name
  );
  console.log("Router got data from db", responseFromDb);

  res.send(responseFromDb);
});

router.post("/GetLensesByDetails", async (req, res) => {
  const Lens_Coating_Name = req.body.Lens_Coating_Name;
  const Thickness_Size = req.body.Thickness_Size;
  const Cylinder_Size = req.body.Cylinder_Size;
  const Prescription_Strength_Size = req.body.Prescription_Strength_Size;

  let responseFromDb = await myRepository2.GetLensesByDetails(
    Lens_Coating_Name,
    Thickness_Size,
    Cylinder_Size,
    Prescription_Strength_Size
  );
  console.log("Router got data from db", responseFromDb);

  res.send(responseFromDb);
});




module.exports = router;
