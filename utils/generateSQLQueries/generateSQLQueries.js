var express = require('express');
const fs = require('fs');
const path = require('path');

function generateSQLQueries(directoryPath, modelsArray, colorsArray) {
  const sqlQueries = [];

  function traverseDirectory(dirPath, category, collection, brand) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const fileStats = fs.statSync(filePath);

      if (fileStats.isDirectory()) {
        // Recursive call for subdirectories
        traverseDirectory(filePath, category, collection, brand);
      } else if (fileStats.isFile()) {
        // Check if the file is an image file (you can add more checks here)
        if (path.extname(file).toLowerCase() === '.jpg') {
          const modelName = modelsArray[Math.floor(Math.random() * modelsArray.length)];
          const color = colorsArray.find((color) => file.toLowerCase().includes(color.toLowerCase()));
          const categoryName = category === 'Eyeglasses' ? 'Eyeglasses' : 'Sunglasses';

          // Build the SQL query for this image
          const sqlQuery = `
            INSERT INTO Glasses (Price, Module_Name_Id, Collection_id, Category_id, Color_id, Shape_id, Brand_id, [Image])
            VALUES (
              ${[400, 350, 450, 500, 550, 600, 650, 700][Math.floor(Math.random() * 8)]},
              (SELECT Id FROM Glasses_Modules WHERE Module_Name = '${modelName}'),
              (SELECT Id FROM Collections WHERE Collection_Name = '${collection}'),
              (SELECT Id FROM Category WHERE Category_Name = '${categoryName}'),
              (SELECT Id FROM Colors WHERE Color_Name = '${color || ''}'),
              1, -- Shape_id
              (SELECT Id FROM Brands WHERE Brand_Name = '${brand}'),
              '${path.basename(file, path.extname(file))}'
            );`;

          sqlQueries.push(sqlQuery);
        }
      }
    }
  }

  // Start traversing the directory
  traverseDirectory(directoryPath, 'Eyeglasses', 'YourCollection', 'YourBrand');

  // Add more collections and brands as needed

  return sqlQueries;
}

// Example usage:
// const directoryPath = '/path/to/glassesPic';
// const modelsArray = ['ARTHUR', 'GROBER', 'FOYGEL'];
// const colorsArray = ['matte-black-black', 'light-grey'];

//const sqlQueries = generateSQLQueries(directoryPath, modelsArray, colorsArray);

// Now sqlQueries contains an array of SQL queries that you can execute in your SQL Server database.
module.exports = generateSQLQueries;