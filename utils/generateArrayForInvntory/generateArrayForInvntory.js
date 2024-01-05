function generateArray() {
  const array = [];
  for (let i = 1; i <= 532; i++) {
    const secondValue = i;
    const thirdValue = Math.floor(Math.random() * 11); // Random number between 0 and 10
    array.push(`(1, ${secondValue}, ${thirdValue})`);
  }
  return array;
}

// Call the function to generate the array
const resultArray = generateArray();

console.log(resultArray); // Print the generated array