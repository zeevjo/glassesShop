var express = require('express');

// function objectValuesToArray(obj) {
//   if (typeof obj !== 'object' || obj === null) {
//     throw new Error('Input is not a valid object.');
//   }

//   const valuesArray = [];

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       valuesArray.push(obj[key]);
//     }
//   }


//   console.log(valuesArray);
//   return valuesArray;
// }

function objectValuesToArray(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Input is not a valid object.');
  }

  const valuesArray = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value !== 'string' || !value.includes('small-pic')) {
        valuesArray.push(value);
      }
    }
  }

  return valuesArray;
}

//objectValuesToArray(obj);

module.exports = objectValuesToArray;