-------------------------------------------------------------------------------------------------------------
-- glassesPic\glasses\brands\SpectraStyle\Sunglasses\winter\FOYGEL
-------------------------------------------------------------------------------------------------------------
INSERT INTO Glasses (Price, Module_Name_Id, Collection_id, Category_id, Color_id, Shape_id, Brand_id, [Image])
VALUES
  (
400,
      COALESCE( 
	  (
      SELECT Id
      FROM Glasses_Modules
      WHERE Module_Name = 'FOYGEL'
    ),
	1  -- Default value for Color_id when Module_Name is not found
    ),
    (
      SELECT Id
      FROM Collections
      WHERE Collection_Name = 'winter'
    ),
    (
      SELECT Id
      FROM Category
      WHERE Category_Name = 'Sunglasses'
    ),
    COALESCE(
      (
        SELECT Id
        FROM Colors
        WHERE Color_Name = 'matte-black-black'
      ),
      1  -- Default value for Color_id when color is not found
    ),
2,
    (
      SELECT Id
      FROM Brands
      WHERE Brand_Name = 'SpectraStyle'
    ),
    COALESCE(
      (
        SELECT Id
        FROM GALLERY
        WHERE [Image] LIKE '%foygel-sun-color-black-pos-1%'
      ),
      1  -- Default value for [Image] when image is not found
    )
  );
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
INSERT INTO Glasses (Price, Module_Name_Id, Collection_id, Category_id, Color_id, Shape_id, Brand_id, [Image])
VALUES
  (
400,
      COALESCE( 
	  (
      SELECT Id
      FROM Glasses_Modules
      WHERE Module_Name = 'FOYGEL'
    ),
	1  -- Default value for Color_id when Module_Name is not found
    ),
    (
      SELECT Id
      FROM Collections
      WHERE Collection_Name = 'winter'
    ),
    (
      SELECT Id
      FROM Category
      WHERE Category_Name = 'Sunglasses'
    ),
    COALESCE(
      (
        SELECT Id
        FROM Colors
        WHERE Color_Name = 'matte-black-black'
      ),
      1  -- Default value for Color_id when color is not found
    ),
2,
    (
      SELECT Id
      FROM Brands
      WHERE Brand_Name = 'SpectraStyle'
    ),
    COALESCE(
      (
        SELECT Id
        FROM GALLERY
        WHERE [Image] LIKE '%foygel-sun-color-black-pos-2%'
      ),
      1  -- Default value for [Image] when image is not found
    )
  );
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
INSERT INTO Glasses (Price, Module_Name_Id, Collection_id, Category_id, Color_id, Shape_id, Brand_id, [Image])
VALUES
  (
400,
      COALESCE( 
	  (
      SELECT Id
      FROM Glasses_Modules
      WHERE Module_Name = 'FOYGEL'
    ),
	1  -- Default value for Color_id when Module_Name is not found
    ),
    (
      SELECT Id
      FROM Collections
      WHERE Collection_Name = 'winter'
    ),
    (
      SELECT Id
      FROM Category
      WHERE Category_Name = 'Sunglasses'
    ),
    COALESCE(
      (
        SELECT Id
        FROM Colors
       WHERE Color_Name = 'citron-tortoise'
      ),
      1  -- Default value for Color_id when color is not found
    ),
2,
    (
      SELECT Id
      FROM Brands
      WHERE Brand_Name = 'SpectraStyle'
    ),
    COALESCE(
      (
        SELECT Id
        FROM GALLERY
        WHERE [Image] LIKE '%foygel-sun-color-citron-tortoise-pos-2%'
      ),
      1  -- Default value for [Image] when image is not found
    )
  );
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
INSERT INTO Glasses (Price, Module_Name_Id, Collection_id, Category_id, Color_id, Shape_id, Brand_id, [Image])
VALUES
  (
400,
      COALESCE( 
	  (
      SELECT Id
      FROM Glasses_Modules
      WHERE Module_Name = 'FOYGEL'
    ),
	1  -- Default value for Color_id when Module_Name is not found
    ),
    (
      SELECT Id
      FROM Collections
      WHERE Collection_Name = 'winter'
    ),
    (
      SELECT Id
      FROM Category
      WHERE Category_Name = 'Sunglasses'
    ),
    COALESCE(
      (
        SELECT Id
        FROM Colors
       WHERE Color_Name = 'pine'
      ),
      1  -- Default value for Color_id when color is not found
    ),
2,
    (
      SELECT Id
      FROM Brands
      WHERE Brand_Name = 'SpectraStyle'
    ),
    COALESCE(
      (
        SELECT Id
        FROM GALLERY
        WHERE [Image] LIKE '%foygel-sun-color-pine-pos-2%'
      ),
      1  -- Default value for [Image] when image is not found
    )
  );
-------------------------------------------------------------------------------------------------------------
