function generateLines2(cylinderStart, cylinderEnd, prescriptionStart, prescriptionEnd, expiryDateStart, expiryDateEnd) {
    const lines = [];
    const fixedValues = {
        Product_Name: 1,
        Price: 200,
        Brand_Id: 2,
        Product_Image: 1,
    };

    for (let cylinder = cylinderStart; cylinder <= cylinderEnd; cylinder++) {
        for (let prescriptionStrength = prescriptionStart; prescriptionStrength <= prescriptionEnd; prescriptionStrength++) {
            for (let expiryDate = expiryDateStart; expiryDate <= expiryDateEnd; expiryDate++) {
                const line = `${fixedValues.Product_Name}, ${fixedValues.Price}, ${cylinder}, ${prescriptionStrength}, ${expiryDate}, ${fixedValues.Brand_Id}, ${fixedValues.Product_Image}`;
                lines.push(line);
            }
        }
    }

    return lines;
}

// Specify the ranges for Cylinder_Id, Prescription_Strength_Id, and Expiry_Date_Id
const cylinderStart = 1;
const cylinderEnd = 55;
const prescriptionStart = 1;
const prescriptionEnd = 110;
const expiryDateStart = 1;
const expiryDateEnd = 4;

// Generate lines for the specified ranges
// const lines = generateLines(cylinderStart, cylinderEnd, prescriptionStart, prescriptionEnd, expiryDateStart, expiryDateEnd);

// // Print the generated lines
// for (const line of lines) {
//     console.log(line);
// }

module.exports = generateLines2;