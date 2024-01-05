const fs = require('fs');
const path = require('path');
// Function to recursively find image files and save their relative paths
// function findImageFiles(directoryPath, imageExtensions, currentPath = '') {
//   const resultArray = [];


//מחזיר שמות של קבצים מספרית תיקיות 
//   function traverseDirectory(directoryPath) {
//     const files = fs.readdirSync(directoryPath);

//     files.forEach((file) => {
//       const filePath = path.join(directoryPath, file);
//       const stats = fs.statSync(filePath);

//       if (stats.isDirectory()) {
//         // Recursively explore subdirectories
//         const subdirectoryPath = path.join(currentPath, file);
//         traverseDirectory(filePath, subdirectoryPath);
//       } else {
//         // Check if the file has a valid image extension
//         const extension = path.extname(filePath).toLowerCase();
//         if (imageExtensions.includes(extension)) {
//           const relativePath = path.join(currentPath, file);
//           resultArray.push(relativePath);
//         }
//       }
//     });
//   }

//   traverseDirectory(directoryPath);
//   return resultArray;
// }


//מחזיר מסלול רלטיבי של קבצים בספרית תיקיות 
// function findImageFiles(directoryPath, imageExtensions, currentPath = '') {
//   const resultArray = [];

//   function traverseDirectory(directoryPath, currentPath) {
//     const files = fs.readdirSync(directoryPath);

//     files.forEach((file) => {
//       const filePath = path.join(directoryPath, file);
//       const stats = fs.statSync(filePath);

//       if (stats.isDirectory()) {
//         // Recursively explore subdirectories
//         const subdirectoryPath = path.join(currentPath, file);
//         traverseDirectory(filePath, subdirectoryPath);
//       } else {
//         // Check if the file has a valid image extension
//         const extension = path.extname(filePath).toLowerCase();
//         if (imageExtensions.includes(extension)) {
//           const relativePath = path.join(currentPath, file);
//           resultArray.push(relativePath);
//         }
//       }
//     });
//   }

//   traverseDirectory(directoryPath, currentPath);
//   return resultArray;
// }
function findImageFiles(directoryPath, imageExtensions, currentPath = '') {
  const resultArray = [];

  function traverseDirectory(directoryPath, currentPath) {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        const subdirectoryPath = path.join(currentPath, file);

        // Check if the current directory has the name "big-pic"
        if (file === 'big-pic') {
          // If it's a "big-pic" folder, search for image files inside
          findImageFilesInBigPic(filePath, subdirectoryPath);
        } else {
          // Otherwise, continue recursively exploring subdirectories
          traverseDirectory(filePath, subdirectoryPath);
        }
      }
    });
  }

  // Function to find image files inside a "big-pic" folder
  function findImageFilesInBigPic(bigPicDirectoryPath, currentPath) {
    const bigPicFiles = fs.readdirSync(bigPicDirectoryPath);

    bigPicFiles.forEach((file) => {
      const filePath = path.join(bigPicDirectoryPath, file);
      const extension = path.extname(filePath).toLowerCase();

      // Check if the file has a valid image extension
      if (imageExtensions.includes(extension)) {
        const relativePath = path.join(currentPath, file);
        resultArray.push(relativePath);
      }
    });
  }

  traverseDirectory(directoryPath, currentPath);
  return resultArray;
}


module.exports = findImageFiles;