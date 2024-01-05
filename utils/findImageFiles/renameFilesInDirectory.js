const fs = require('fs');
const path = require('path');

// Function to rename files by removing target words from their names
function renameFilesInDirectory(directory, targetWords) {
  const renamedFiles = {};

  // Read the list of files in the directory
  const files = fs.readdirSync(directory);

  // Iterate through each file
  files.forEach((fileName) => {
    const filePath = path.join(directory, fileName);

    // Check if it's a file (not a directory)
    if (fs.statSync(filePath).isFile()) {
      // Process the file name
      const newName = removeTargetWords(fileName, targetWords);

      // Construct the new file path
      const newFilePath = path.join(directory, newName);

      // Rename the file
      fs.renameSync(filePath, newFilePath);

      // Store the mapping of old name to new name
      renamedFiles[fileName] = newName;
    }
  });

  return renamedFiles;
}

// Function to remove target words from a file name
function removeTargetWords(fileName, targetWords) {
  let newName = fileName;
  targetWords.forEach((word) => {
    // Use a regular expression to globally replace the target word with an empty string
    newName = newName.replace(new RegExp(word, 'g'), '');
  });
  return newName;
}

// Specify the directory to search for files and the target words to remove
// const directoryToSearch = './your_directory_path_here';
const targetWordsToRemove = ['2018-', '_72x72'];

// Rename files in the directory and store the mapping of old names to new names
// const renamedFiles = renameFilesInDirectory(directoryToSearch, targetWordsToRemove);



module.exports = renameFilesInDirectory;
// Print the mapping of old names to new names
// console.log(renamedFiles);
