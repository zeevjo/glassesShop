const fs = require('fs');
const path = require('path');

// Function to list all file names in a directory
function listFileNamesInDirectory(directory) {
  const fileNames = [];

  // Read the list of files in the directory
  const files = fs.readdirSync(directory);

  // Iterate through each file
  files.forEach((fileName) => {
    const filePath = path.join(directory, fileName);

    // Check if it's a file (not a directory)
    if (fs.statSync(filePath).isFile()) {
      fileNames.push(fileName);
    }
  });

  return fileNames;
}

// Specify the directory to list file names from
// const directoryToSearch = './your_directory_path_here';

// List all file names in the directory
// const filesInDirectory = listFileNamesInDirectory(directoryToSearch);

// Print the array of file names
// console.log(filesInDirectory);


module.exports = listFileNamesInDirectory;