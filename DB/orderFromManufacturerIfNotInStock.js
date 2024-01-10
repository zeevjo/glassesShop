const mssql = require("mssql");
const poolPromise = require("../sqlConfig/sqlConfig");

const orderFromManufacturerIfNotInStock = async (
  arrayOfObjects = [],
  Id = 0
) => {
  const pool = await poolPromise;

  console.log("arrayOfObjects", arrayOfObjects.length, Id);
  /**
   * when there is irems missing in cart, it comse here as an arrray
   */
  if (arrayOfObjects.length > 0) {
    for (const obj of arrayOfObjects) {
      const Id = obj.Id;
      const Quantity = obj.Quantity;

      if (Quantity === 0) {
        const request = pool.request();
        request.input("Id", mssql.Int, Id);

        try {
          const result = await request.execute(
            "orderFromManufacturerIfNotInStock"
          );
          console.log(
            ` orderFromManufacturerIfNotInStock for Id: ${Id}`
          );
          console.log("result", result);
          return result;
        } catch (error) {
          console.error(
            `Error executing orderFromManufacturerIfNotInStock for Id ${Id}:`,
            error
          );
        }
      }
    }
  }

  /**
   * order a specific item from manufacturer
   */
  if (Id != 0) {
    console.log("TEST");
    try {
      const request = pool.request();
      request.input("Id", mssql.Int, Id);
      const result = await request.execute("orderFromManufacturerIfNotInStock");
      console.log(`Executed orderFromManufacturerIfNotInStock for Id ${Id}`);
      console.log("result", result);
    } catch (error) {
      console.error(
        `Error executing orderFromManufacturerIfNotInStock for Id ${Id}:`,
        error
      );
    }
  }
};

module.exports = {
  orderFromManufacturerIfNotInStock,
};
