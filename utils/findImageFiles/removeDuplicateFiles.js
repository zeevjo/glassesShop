const fs = require('fs');
const path = require('path');

// Function to remove duplicate files in a directory
function removeDuplicateFiles(directory) {
  const files = fs.readdirSync(directory);

  // Create a map to track file names and their counts
  const fileNameCounts = new Map();

  // Iterate through each file in the directory
  files.forEach((fileName) => {
    const filePath = path.join(directory, fileName);

    // Check if it's a file (not a directory)
    if (fs.statSync(filePath).isFile()) {
      // Extract the base file name (excluding the extension)
      const baseFileName = path.parse(fileName).name;

      // Increment the count for this base file name in the map
      const count = fileNameCounts.get(baseFileName) || 0;
      fileNameCounts.set(baseFileName, count + 1);

      // If count is greater than 1, it's a duplicate file
      if (count > 0) {
        // Remove the duplicate file
        fs.unlinkSync(filePath);
        console.log(`Removed duplicate file: ${fileName}`);
      }
    }
  });
}

// Specify the directory to remove duplicate files from
// const directoryToRemoveDuplicates = './your_directory_path_here';

// Call the function to remove duplicate files
// removeDuplicateFiles(directoryToRemoveDuplicates);


module.exports = removeDuplicateFiles;