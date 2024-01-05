const fs = require('fs');
const path = require('path');
 // Function to generate a random price

function generateSqlCommands(relativePaths) {
  const sqlCommands = [];

  relativePaths.forEach((relativePath) => {
    const parts = relativePath.split(path.sep);
    
    // Extract relevant information from the path parts
    const [general_name,brands,brand_name,Category_name,Collection_name,model_name,file_size,File_name_of_the_item]
 = parts;

    // Generate a random price (change the array as needed)
    const price = 500;


let Color_Name = extractColorFromFileName(File_name_of_the_item);

    // Build the SQL command
//     const sqlCommand = `
//  INSERT INTO Glasses (Price, Module_Name_Id, Collection_id, Category_id, Color_id, Shape_id, Brand_id, [Image])
// VALUES
//   (
// 500,
//       COALESCE( 
// 	  (
//       SELECT Id
//       FROM Glasses_Modules
//       WHERE Module_Name = '${model_name}'
//     ),
// 	1  -- Default value for Module_Name_Id when Module_Name is not found
//     ),
//     (
//       SELECT Id
//       FROM Collections
//       WHERE Collection_Name = '${Collection_name}'
//     ),
//     (
//       SELECT Id
//       FROM Category
//       WHERE Category_Name = '${Category_name}'
//     ),
//     COALESCE(
//       (
//         SELECT Id
//         FROM Colors
//        WHERE Color_Name = '${Color_Name}'
//       ),
//       1  -- Default value for Color_id when color is not found
//     ),
// 2,
//     (
//       SELECT Id
//       FROM Brands
//       WHERE Brand_Name = '${brand_name}'
//     ),
//     COALESCE(
//       (
//         SELECT Id
//         FROM GALLERY
//         WHERE [Image] LIKE '%${File_name_of_the_item}%'
//       ),
//       1  -- Default value for [Image] when image is not found
//     )
//   );
//     `;
const sqlCommand = `INSERT INTO Glasses (Price, Module_Name_Id, Collection_id, Category_id, Color_id, Shape_id, Brand_id, [Image])VALUES(500,COALESCE((SELECT Id FROM Glasses_Modules WHERE Module_Name = '${model_name}'),1/* Default value for Module_Name_Id when Module_Name is not found */),(SELECT Id  FROM Collections  WHERE Collection_Name = '${Collection_name}'),(SELECT Id FROM Category WHERE Category_Name = '${Category_name}'),COALESCE((SELECT Id FROM Colors WHERE Color_Name = '${Color_Name}'),1  /* Default value for Color_id when color is not found */), 2,(SELECT Id FROM Brands WHERE Brand_Name = '${brand_name}'), COALESCE((SELECT IdFROM GALLERY WHERE [Image] LIKE '%${File_name_of_the_item}%'),1 /* Default value for [Image] when image is not found*/));`;
    sqlCommands.push(sqlCommand);
  });

  return sqlCommands;
}

function extractColorFromFileName(fileName) {
  const regex = /color-(.*?)-pos/g;
  const matches = regex.exec(fileName);
  
  if (matches && matches.length > 1) {
    return matches[1]; // Extracted color
  } else {
    return null; // Color not found
  }
}

module.exports = generateSqlCommands;



