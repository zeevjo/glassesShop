function generateLines(cylinderStart, cylinderEnd, cylinderStep, prescriptionStart, prescriptionEnd, prescriptionStep, thicknessStart, thicknessEnd) {
  const lines = [];
  let size = 200;
  let price = 200;
  let lensCoatingId = 1;
  let brandId = 1;

  for (let cylinder = cylinderStart; cylinder <= cylinderEnd; cylinder += cylinderStep) {
      for (let prescriptionStrength = prescriptionStart; prescriptionStrength <= prescriptionEnd; prescriptionStrength += prescriptionStep) {
          for (let thicknessId = thicknessStart; thicknessId <= thicknessEnd; thicknessId++) {
              const line = `(${lensCoatingId}, ${price.toFixed(2)}, ${thicknessId}, ${cylinder.toFixed(2)}, ${prescriptionStrength.toFixed(2)}, ${brandId}, 1),`;
              lines.push(line);

              // Increase the price by 20 when size reaches 13
              if (size === 13) {
                  price += 20;
              }

              // Change lens coating ID to 2 after certain conditions are met
              if (prescriptionStrength === prescriptionEnd && cylinder === cylinderEnd) {
                  lensCoatingId = 2;
              }
          }
      }
  }

  return lines;
}

// Specify the ranges and increments for Cylinder_Id, Prescription_Strength, and Thickness_Id
// const cylinderStart = 1;
// const cylinderEnd = 55;
// const cylinderStep = 1;

// const prescriptionStart = 1;
// const prescriptionEnd = 110;
// const prescriptionStep = 1;

// const thicknessStart = 1;
// const thicknessEnd = 7;

// // Generate lines for the specified ranges and increments
// const lines = generateLines(cylinderStart, cylinderEnd, cylinderStep, prescriptionStart, prescriptionEnd, prescriptionStep, thicknessStart, thicknessEnd);

// // Print the generated lines
// for (const line of lines) {
//   console.log(line);
// }


module.exports = generateLines;