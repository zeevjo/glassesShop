var express = require("express");
var app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Function to recursively find image files in a directory
function findImageFiles(directory) {
  const imageFiles = {};

  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // If it's a directory, recursively scan it
        scanDirectory(filePath);
      } else if (isImageFile(file)) {
        // If it's an image file, add it to the object with relative path
        const relativePath = path
          .relative(directory, filePath)
          .replace(/\\/g, "/");
        const encodedRelativePath = encodeURIComponent(`/${relativePath}`);
        const imageUrl = `http://localhost:4010/test/hello2/%2FglassesPic${encodedRelativePath}`;
        imageFiles[file] = imageUrl;

        // const relativePath = path.relative(directory, filePath).replace(/\\/g, '/');;
        // imageFiles[file] = `/${relativePath}`;
      }
    });
  }

  scanDirectory(directory);
  return imageFiles;
}

// Function to check if a file has an image extension (you can extend this list)
function isImageFile(fileName) {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  const ext = path.extname(fileName).toLowerCase();
  return imageExtensions.includes(ext);
}

// Specify the directory to search for image files
// const directoryToSearch = "../../glassesPic";

// Find image files in the directory
// const imageFiles = findImageFiles(directoryToSearch);

// Print the object containing file names and relative paths
// console.log(imageFiles);

module.exports = findImageFiles;