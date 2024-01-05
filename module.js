


const x  =`



---------------------------------------------------
CREATE OR ALTER PROCEDURE [dbo].[db-drop-and-insert-sp]

as
begin



-- Drop the Payments table 38
IF OBJECT_ID('[dbo].[Payments]', 'U') IS NOT NULL
DROP TABLE [dbo].Payments;


-- Drop the Order_Itmes table 37
IF OBJECT_ID('[dbo].[Order_Itmes]', 'U') IS NOT NULL
DROP TABLE [dbo].Order_Itmes;


-- Drop the Orders table 36
IF OBJECT_ID('[dbo].[Orders]', 'U') IS NOT NULL
DROP TABLE [dbo].Orders;


-- Drop the Order_Type table 35
IF OBJECT_ID('[dbo].[Order_Type]', 'U') IS NOT NULL
DROP TABLE [dbo].Order_Type;


-- Drop the Payment_Status table 34
IF OBJECT_ID('[dbo].[Payment_Status]', 'U') IS NOT NULL
DROP TABLE [dbo].Payment_Status;


-- Drop the Payment_Methods table 33
IF OBJECT_ID('[dbo].[Payment_Methods]', 'U') IS NOT NULL
DROP TABLE [dbo].Payment_Methods;


-- Drop the Cart_Items table 32
IF OBJECT_ID('[dbo].[Cart_Items]', 'U') IS NOT NULL
DROP TABLE [dbo].Cart_Items;


-- Drop the Cart table 31
IF OBJECT_ID('[dbo].[Cart]', 'U') IS NOT NULL
DROP TABLE [dbo].Cart;


-- Drop the Calender_Scheduling_Authorization table 30
IF OBJECT_ID('[dbo].[Calender_Scheduling_Authorization]', 'U') IS NOT NULL
DROP TABLE [dbo].Calender_Scheduling_Authorization;


-- Drop the Calender_Authorization table 29
IF OBJECT_ID('[dbo].[Calender_Authorization]', 'U') IS NOT NULL
DROP TABLE [dbo].Calender_Authorization;


-- Drop the Scheduling_Purpose table 28
IF OBJECT_ID('[dbo].[Scheduling_Purpose]', 'U') IS NOT NULL
DROP TABLE [dbo].Scheduling_Purpose;


-- Drop the Calendar_Types table 27
IF OBJECT_ID('[dbo].[Calendar_Types]', 'U') IS NOT NULL
DROP TABLE [dbo].Calendar_Types;


-- Drop the Scheduling_In_Calendar table 26
IF OBJECT_ID('[dbo].[Scheduling_In_Calendar]', 'U') IS NOT NULL
DROP TABLE [dbo].Scheduling_In_Calendar;


-- Drop the Users table 25
IF OBJECT_ID('[dbo].[Users]', 'U') IS NOT NULL
DROP TABLE [dbo].Users;


-- Drop the User_Roles table 24
IF OBJECT_ID('[dbo].[User_Roles]', 'U') IS NOT NULL
DROP TABLE [dbo].User_Roles;


-- Drop the Employees table 23
IF OBJECT_ID('[dbo].[Employees]', 'U') IS NOT NULL
DROP TABLE [dbo].Employees;


-- Drop the Customers table 22
IF OBJECT_ID('[dbo].[Customers]', 'U') IS NOT NULL
DROP TABLE [dbo].Customers;


-- Drop the Oner table 21
IF OBJECT_ID('[dbo].[Oner]', 'U') IS NOT NULL
DROP TABLE [dbo].Oner;


-- Drop the Oner table 20
IF OBJECT_ID('[dbo].[JobStatus]', 'U') IS NOT NULL
DROP TABLE [dbo].JobStatus;


-- Drop the Oner table 19
IF OBJECT_ID('[dbo].[Customer_Rank]', 'U') IS NOT NULL
DROP TABLE [dbo].Customer_Rank;


-- Drop the Inventory table 18
IF OBJECT_ID('[dbo].[Inventory]', 'U') IS NOT NULL
DROP TABLE [dbo].Inventory;


-- Drop the Contact_Lenses table 17
IF OBJECT_ID('[dbo].[Contact_Lenses]', 'U') IS NOT NULL
DROP TABLE [dbo].Contact_Lenses;


-- Drop the Lenses table 16
IF OBJECT_ID('[dbo].[Lenses]', 'U') IS NOT NULL
DROP TABLE [dbo].Lenses;


-- Drop the Glasses table 15 
IF OBJECT_ID('[dbo].[Glasses]', 'U') IS NOT NULL
DROP TABLE [dbo].Glasses;


-- Drop the People table 14
IF OBJECT_ID('[dbo].[People]', 'U') IS NOT NULL
DROP TABLE [dbo].People;


-- Drop the Glasses_Modules table 13
IF OBJECT_ID('[dbo].[Glasses_Modules]', 'U') IS NOT NULL
DROP TABLE [dbo].Glasses_Modules;


-- Drop the Colors table 12
IF OBJECT_ID('[dbo].[Colors]', 'U') IS NOT NULL
DROP TABLE [dbo].Colors;


-- Drop the Prescription_Strength table 11
IF OBJECT_ID('[dbo].[Prescription_Strength]', 'U') IS NOT NULL
DROP TABLE [dbo].Prescription_Strength;


-- Drop the Cylinder table 10
IF OBJECT_ID('[dbo].[Cylinder]', 'U') IS NOT NULL
DROP TABLE [dbo].Cylinder;


-- Drop the Thickness table 9
IF OBJECT_ID('[dbo].[Thickness]', 'U') IS NOT NULL
DROP TABLE [dbo].Thickness;


-- Drop the Shapes table 8
IF OBJECT_ID('[dbo].[Shapes]', 'U') IS NOT NULL
DROP TABLE [dbo].Shapes;


-- Drop the GALLERY table 7
IF OBJECT_ID('[dbo].[GALLERY]', 'U') IS NOT NULL
DROP TABLE [dbo].GALLERY;


-- Drop the Brands table 6
IF OBJECT_ID('[dbo].[Brands]', 'U') IS NOT NULL
DROP TABLE [dbo].Brands;


-- Drop the Collections table 5
IF OBJECT_ID('[dbo].[Collections]', 'U') IS NOT NULL
DROP TABLE [dbo].Collections;


-- Drop the Category table 4
IF OBJECT_ID('[dbo].[Category]', 'U') IS NOT NULL
DROP TABLE [dbo].Category;


-- Drop the Expiry_Date table 3
IF OBJECT_ID('[dbo].[Expiry_Date]', 'U') IS NOT NULL
DROP TABLE [dbo].Expiry_Date;


-- Drop the Lens_Coating table 2
IF OBJECT_ID('[dbo].[Lens_Coating]', 'U') IS NOT NULL
DROP TABLE [dbo].Lens_Coating;


-- Drop the Product_Type table 1
IF OBJECT_ID('[dbo].[Product_Type]', 'U') IS NOT NULL
DROP TABLE [dbo].Product_Type;


--//////////////////////////////////////////////////////////

-- Create Product_Type table 1
CREATE TABLE Product_Type (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Product_Type_Name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


--select * from Product_Type

-- Create Lens_Coating table 2
CREATE TABLE Lens_Coating (
    Id int IDENTITY(1,1) PRIMARY KEY,
    lens_coating_name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Expiry_Date table 3 
CREATE TABLE Expiry_Date (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Expiry_Date_Name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Collections table 4 
CREATE TABLE Collections (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Collection_Name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Category table 5
CREATE TABLE Category (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Category_Name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Brands table 6
CREATE TABLE Brands (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Brand_Name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create GALLERY table 7
CREATE TABLE GALLERY (
    Id int IDENTITY(1,1) PRIMARY KEY,
    [Image] nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);



-- Create Shapes table 8
CREATE TABLE Shapes (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Shape_Name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Thickness table 9 
CREATE TABLE Thickness (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Thickness_Size_name FLOAT,
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Cylinder table 10
CREATE TABLE Cylinder (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Cylinder_Size_Name FLOAT,
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Prescription_Strength table 11
CREATE TABLE Prescription_Strength (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Prescription_Strength_Size FLOAT,
    Created_At DATETIME DEFAULT GETDATE()
);



-- Create GALLERY table 12
CREATE TABLE Colors (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Color_Name nvarchar(255),
	[Image] int FOREIGN KEY REFERENCES GALLERY(Id),  
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Glasses_Modules table 13
CREATE TABLE Glasses_Modules (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Module_Name nvarchar(255),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create People table 14
CREATE TABLE People (
    Id int IDENTITY(1,1) PRIMARY KEY,
    First_Name nvarchar(255),
	Last_Name nvarchar(255),
	Email nvarchar(255),
	Phon_Number nvarchar(255),
	Profile_Picture nvarchar(255),
	Bday DATE,
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Glasses table 15
CREATE TABLE Glasses (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Price int,
	Module_Name_Id int FOREIGN KEY REFERENCES Glasses_Modules(Id),
	Collection_id int FOREIGN KEY REFERENCES Collections(Id),
	Category_id int FOREIGN KEY REFERENCES Category(Id),
	Color_id int FOREIGN KEY REFERENCES Colors(Id),
	Shape_id int FOREIGN KEY REFERENCES Shapes(Id),
	Brand_id int FOREIGN KEY REFERENCES Brands(Id),
	[Image] int FOREIGN KEY REFERENCES GALLERY(Id),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Lenses table 16
CREATE TABLE Lenses (
    Id int IDENTITY(1,1) PRIMARY KEY,
    Lens_Coating_id int FOREIGN KEY REFERENCES Lens_Coating(Id),
	Price int,
	Thickness_Id int FOREIGN KEY REFERENCES Thickness(Id),
	Cylinder_Id int FOREIGN KEY REFERENCES Cylinder(Id),
	Prescription_Strength_Id int FOREIGN KEY REFERENCES Prescription_Strength(Id),
	Brand_Id int FOREIGN KEY REFERENCES Brands(Id),
	[Image] int FOREIGN KEY REFERENCES GALLERY(Id),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Contact_Lenses table 17
CREATE TABLE Contact_Lenses(
    Id int IDENTITY(1,1) PRIMARY KEY,
	Price int,
	Cylinder_Id int FOREIGN KEY REFERENCES Cylinder(Id),
	Prescription_Strength_Id int FOREIGN KEY REFERENCES Prescription_Strength(Id),
	Expiry_Date_Id int FOREIGN KEY REFERENCES Expiry_Date(Id),
	Brand_Id int FOREIGN KEY REFERENCES Brands(Id),
	[Image] int FOREIGN KEY REFERENCES GALLERY(Id),
    Created_At DATETIME DEFAULT GETDATE()
);


-- Create Inventory table 18
 CREATE TABLE Inventory(
	Id int IDENTITY(1,1) PRIMARY KEY,
	Product_Type_Id int FOREIGN KEY REFERENCES Product_Type(Id),
	Associated_Product_Id int,
	Quantity int,
	Created_At DATETIME DEFAULT GETDATE()
);															  


-- Create Inventory table 18
/* CREATE TABLE Inventory(
	Id int IDENTITY(1,1) PRIMARY KEY,
	Product_Type_Id int FOREIGN KEY REFERENCES Product_Type(Id),
	Associated_Product_Id int,
	Quantity int,
	CONSTRAINT FK_Related1 FOREIGN KEY (Associated_Product_Id) REFERENCES Glasses(Id),
    CONSTRAINT FK_Related2 FOREIGN KEY (Associated_Product_Id) REFERENCES Lenses(Id),
    CONSTRAINT FK_Related3 FOREIGN KEY (Associated_Product_Id) REFERENCES Contact_Lenses(Id),
	Created_At DATETIME DEFAULT GETDATE()
);															  
 	*/

-- Create Oner Customer_Rank table  19
CREATE TABLE Customer_Rank (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Customer_Rank_Type nvarchar(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Oner JobStatus table  20
CREATE TABLE JobStatus (
	Id int IDENTITY(1,1) PRIMARY KEY,
	JobStatus_Name nvarchar(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Oner table 21
CREATE TABLE Oner (
	Id int IDENTITY(1,1) PRIMARY KEY,
	People_Id  int FOREIGN KEY REFERENCES People(Id),
	Salary float,
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Customers table 22
CREATE TABLE Customers (
	Id int IDENTITY(1,1) PRIMARY KEY,
	People_Id  int FOREIGN KEY REFERENCES People(Id),
	Customer_Rank_Name int FOREIGN KEY REFERENCES Customer_Rank(Id),
	Created_At DATETIME DEFAULT GETDATE()
);

 
-- Create Customers table 23
CREATE TABLE Employees (
	Id int IDENTITY(1,1) PRIMARY KEY,
	People_Id  int FOREIGN KEY REFERENCES People(Id),
	Salary float,
	Days_Off float,
	Sick_Days float,
	JobStatus_Name_Type int FOREIGN KEY REFERENCES JobStatus(Id),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create User_Roles table 24
CREATE TABLE User_Roles (
	Id int IDENTITY(1,1) PRIMARY KEY,
	User_Role_Name NVARCHAR(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Users table 25
CREATE TABLE Users (
	Id int IDENTITY(1,1) PRIMARY KEY,
	[User_Name] NVARCHAR(255),
	Password  NVARCHAR(255),
	People_Id int FOREIGN KEY REFERENCES People(Id),
	User_Role_Type_Id int FOREIGN KEY REFERENCES  User_Roles(Id),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Scheduling_In_Calendar table 26
CREATE TABLE Scheduling_In_Calendar (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Scheduler_Id int FOREIGN KEY REFERENCES Users(Id),
	Scheduling_Manager int FOREIGN KEY REFERENCES Users(Id),
	Schedule_Participant int FOREIGN KEY REFERENCES Users(Id),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Calendar_Types table 27
CREATE TABLE Calendar_Types (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Calendar_Type_Name NVARCHAR(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Scheduling_Purpose table 28
CREATE TABLE Scheduling_Purpose (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Scheduling_Purpose_Name NVARCHAR(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Calender_Authorization table 29
CREATE TABLE Calender_Authorization (
	Id int IDENTITY(1,1) PRIMARY KEY,
	[Role] int FOREIGN KEY REFERENCES User_Roles(Id),
	Claender_Id int FOREIGN KEY REFERENCES Calendar_Types(Id),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Calender_Scheduling_Authorization table 30
CREATE TABLE Calender_Scheduling_Authorization (
	Id int IDENTITY(1,1) PRIMARY KEY,
	[Role] int FOREIGN KEY REFERENCES User_Roles(Id),
	Scheduling_Purpose_Type int FOREIGN KEY REFERENCES Scheduling_Purpose(Id),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Cart table 31
CREATE TABLE Cart (
	Id int IDENTITY(1,1) PRIMARY KEY,
	[User_Id] int FOREIGN KEY REFERENCES Users(Id),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Cart table 32
CREATE TABLE Cart_Items (
	Id int IDENTITY(1,1) PRIMARY KEY,
	[Cart_Id] int FOREIGN KEY REFERENCES Cart(Id),
	product_Id int FOREIGN KEY REFERENCES Inventory(Id),
	Created_At DATETIME DEFAULT GETDATE()
);
	 

-- Create Payment_Methods table 33
CREATE TABLE Payment_Methods (
	Id int IDENTITY(1,1) PRIMARY KEY,
	[Payment_Method_Name] NVARCHAR(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Payment_Status table 34
CREATE TABLE Payment_Status (
	Id int IDENTITY(1,1) PRIMARY KEY,
	[Payment_Status_Name] NVARCHAR(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Order_Type table 35
CREATE TABLE Order_Type (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Order_Type_Name NVARCHAR(255),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Orders table 36
CREATE TABLE Orders (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Order_Type_Id int FOREIGN KEY REFERENCES Order_Type(Id),
	[User_Id] int FOREIGN KEY REFERENCES Users(Id),
	Employee_Id int FOREIGN KEY REFERENCES Employees(Id),
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Order_Itmes table 37
CREATE TABLE Order_Itmes (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Product_Id int FOREIGN KEY REFERENCES Inventory(Id),
	Order_Id int FOREIGN KEY REFERENCES Orders(Id),
--	Price int,
	Created_At DATETIME DEFAULT GETDATE()
);


-- Create Payments table 38
CREATE TABLE Payments (
	Id int IDENTITY(1,1) PRIMARY KEY,
	Order_Id int FOREIGN KEY REFERENCES Orders(Id),
	Payment_Method_Type_Id int FOREIGN KEY REFERENCES Payment_Methods(Id),
	Payment_Status_Id int FOREIGN KEY REFERENCES Payment_Status(Id),
--	Quantity int,
--	Price int,
	Created_At DATETIME DEFAULT GETDATE()
);


--//////////////////////////////////////////////////////////////
--//////////////////////////////////////////////////////////////
--//////////////////////////////////////////////////////////////
--//////////////////////////////////////////////////////////////
--//////////////////////////////////////////////////////////////
--//////////////////////////////////////////////////////////////
--//////////////////////////////////////////////////////////////

-- basice insrt to data base

INSERT INTO Product_Type(Product_Type_Name)
VALUES ('Glasses'),
       ('Lenses'),
       ('Contact_Lenses')


INSERT INTO  Glasses_Modules (Module_Name)
 values
  ('ERORR'),
 ('KASH'),
 ('LEMTOSH'),
 ('TINIF'),
 ('ZOLMAN'),
 ('DAHVEN'),
 ('FRITZ'),
 ('GATKES'),
 ('SHTARKER'),
 ('TINT-SHTARKER'),
 ('ARTHUR'),
 ('GROBER'),
 ('RIZIK'),
 ('SHEITER'),
 ('FOYGEL'),
 ('GAZEEKTAL'),
 ('MILTZEN'),
 ('SHVITZ'),
 ('GELT'),
 ('NEBB'),
 ('TELENA'),
 ('ZOGAN'),
 ('TINT-MILTZEN'),
 ('BJORN'),
 ('BRANDON'),
 ('FRANKIE'),
 ('VILDA'),
 ('TINT-CLIPZEN '),
 ('TINT-LEMTOSH'),
 ('BILLIK'),
 ('MOBBLE'),
 ('YONTIF'),
 ('ZEV'),
 ('LEMTOSH-MONOCHROME '),
 ('LEMTOSH-SUN-PASTLE '),
 ('ALEX'),
 ('JARED'),
 ('SMENDRIK'),
 ('TRAVIS'),
 ('DUDEL'),
 ('KEPPE'),         
 ('YUKEL'),
 ('JACOB'),
 ('LES'),
 ('LOREN'),
 ('NOAH'),
 ('DOV'),
 ('GENUNG'),
 ('MOMZA'),
 ('VILDA'),
 ('HITSIK'),
 ('KITZEL'),
 ('MANGITO'),
 ('PETIE'),
 ('EZRA'),
 ('GOLDA'),
 ('LAZER'),
('SHINDIG'),
 ('KELEV'),
 ('ZETZ'),
 ('ZULU'),
 ('GREPS'),
 ('HELDISH'),
 ('HYMAN'),
 ('YONA'),
 ('COURTNEY'),
 ('MISH'),
 ('PITSEL'),
 ('ZINDIK'),
 ('AIDIM'),
 ('BREN'),
 ('FLIPTOSH'),
 ('ZAYDE'),
 ('SHEISTER')

 

INSERT INTO Collections(Collection_Name)
VALUES	('summer'),
		('winter'),
		('Spring'),
		('fall')


INSERT INTO Category(Category_Name)
VALUES	('Eyeglasses'),
		('Sunglasses')


INSERT INTO Brands(Brand_Name)
VALUES ('VisionVogue'),
       ('SpectraStyle'),
       ('UrbanOptiks')


-- GALLERY

/* 
INSERT INTO Colors(Color_Name)
VALUES
	('erorr'),
    ('amber-tortoise'),
    ('antique-gold-matte-dark-brown'),
    ('antique-gold'),
    ('antique-tortoise-gunmetal'),
    ('antique-tortoise'),
    ('bamboo'),
    ('bark'),
    ('bel-air-blue'),
    ('black-crystal'),
    ('black-crystal2'),
    ('black-gold'),
    ('black-gunmetal'),
    ('black-pewter'),
    ('black-silver'),
    ('blonde-gold'),
    ('blonde-silver'),
    ('blonde'),
    ('blue-ink'),
    ('blue-smoke'),
    ('blush'),
    ('brown-ale'),
    ('brown-ash'),
    ('brown-bamboo'),
    ('brown-smoke'),
    ('brown'),
    ('burgundy'),
    ('burnt-rose-silver'),
    ('burnt-rose'),
    ('burnt-tortoise-gold'),
    ('burnt-tortoise'),
    ('butterscotch'),
    ('caramel-gold'),
    ('caramel'),
    ('celebrity-blue'),
    ('champagne'),
    ('charcoal-wine'),
    ('charcoal'),
    ('cinnamon-flesh'),
    ('cinnamon-gold'),
    ('cinnamon'),
    ('citron-tortoise'),
    ('classic-havana-gunmetal'),
    ('classic-havana'),
    ('cobblestone'),
    ('crystal-gold'),
    ('crystal'),
    ('dark-blonde'),
    ('dark-gunmetal'),
    ('dark-havana'),
    ('emerald-gold'),
    ('emerald'),
    ('flesh-tortoise-gold'),
    ('flesh'),
    ('gold-matte-black'),
    ('green-moss'),
    ('grey-black'),
    ('grey-brown-fade'),
    ('grey-fade'),
    ('grey-ice'),
    ('grey-light-grey'),
    ('grey-silver'),
    ('grey-tortoise-matte-silver'),
    ('grey-tortoise'),
    ('gunmetal'),
    ('heritage-tortoise'),
    ('honey-blonde'),
    ('honey-tortoise'),
    ('ink-silver'),
    ('ink'),
    ('light-blue-grey'),
    ('light-grey-silver'),
    ('light-grey'),
    ('light-tortoise'),
    ('limelight'),
    ('matte-black-black'),
    ('matte-black-gold'),
    ('matte-black-gunmetal'),
    ('matte-black-matte-gold'),
    ('matte-black-wood'),
    ('matte-black-yellow'),
    ('matte-black'),
    ('matte-dark-blonde'),
    ('matte-dark-brown'),
    ('matte-pewter'),
    ('matte-silver-dark-grey'),
    ('matte-tortoise'),
    ('mellow-yellow'),
    ('mist-tortoise'),
    ('mist'),
    ('navy-beige'),
    ('new-york-rose'),
    ('olive-brown'),
    ('olive-green'),
    ('olive-tortoise'),
    ('pastel-yellow'),
    ('pine-silver'),
    ('pine'),
    ('purple-nurple'),
    ('raw-gold'),
    ('ruby-gold'),
    ('ruby'),
    ('sage-pewter'),
    ('sage-silver'),
    ('sage'),
    ('sapphire-pewter'),
    ('sapphire'),
    ('silver'),
    ('spot-tortoise-gold'),
    ('straw'),
    ('tobacco'),
    ('tortoise-antique-gold'),
    ('tortoise-black'),
    ('tortoise-crystal'),
    ('tortoise-gold'),
    ('tortoise-matte-gold'),
    ('tortoise-pine'),
    ('tortoise-with-cosmitan-brown-lens'),
    ('tortoise-with-g-15-lens'),
    ('tortoise'),
    ('vintage-tortoise')


*/

INSERT INTO Shapes(Shape_Name)
VALUES	('CAT-EYE'),
		('ROUND'),
		('SQUARE'),
		('PILOTS')


-- TODO: Glasses Table 


-- Lenses Table 


-- FOR DEV => FROD IS SAVED IN FILES

  /*
INSERT INTO Lenses ( Lenses.Lens_Coating_id, Lenses.Price, Lenses.Thickness_Id, Lenses.Cylinder_Id,  Lenses.Prescription_Strength_Id,  Lenses.Brand_Id, Lenses.[Image])
    VALUES(1, 200, 1, 1, 1, 1, 2);
 INSERT INTO Lenses ( Lenses.Lens_Coating_id, Lenses.Price, Lenses.Thickness_Id, Lenses.Cylinder_Id,  Lenses.Prescription_Strength_Id,  Lenses.Brand_Id, Lenses.[Image])
    VALUES(1, 200, 2, 1, 1, 1, 2);	 

	 */

-- select * from Lenses

--  Contact_Lenses Table
-- FOR DEV => FROD IS SAVED IN FILES

/*
INSERT INTO Contact_Lenses (  Contact_Lenses.Price, Contact_Lenses.Cylinder_Id, Contact_Lenses.Prescription_Strength_Id,  Contact_Lenses.Expiry_Date_Id,  Contact_Lenses.Brand_Id, Contact_Lenses.[Image])
VALUES( 200, 1, 1, 1, 2, 3);  
    INSERT INTO Contact_Lenses ( Contact_Lenses.Price, Contact_Lenses.Cylinder_Id, Contact_Lenses.Prescription_Strength_Id,  Contact_Lenses.Expiry_Date_Id,  Contact_Lenses.Brand_Id, Contact_Lenses.[Image])
VALUES( 200, 1, 1, 2, 2, 3);	

 */
  
-- TODO: Inventory Table
INSERT INTO Customer_Rank(Customer_Rank_Type)
VALUES ('Platinum Customer'),
       ('Gold Customers'),
	   ('Silver Customer')

 
INSERT INTO JobStatus(JobStatus_Name)
VALUES ('full time'),
       ('part time')


INSERT INTO Lens_Coating(Lens_Coating_Name)
VALUES ('BluBlock'),
       ('Anti-Reflective')


INSERT INTO [Expiry_Date](Expiry_Date_Name)
VALUES	('daily'),
		('weekly'),
		('monthly'),
		('annual')



--	SELECT * FROM GALLERY

INSERT INTO Cylinder(Cylinder_Size_Name)
VALUES (0.25),
       (0.50),
       (0.75),
	   (1.00),
	   (1.25),
       (1.50),
       (1.75),
	   (2.00),
	   (2.25),
       (2.50),
       (2.75),
	   (3.00),
	   (3.25),
       (3.50),
       (3.75),
	   (4.00),
	   (4.25),
       (4.50),
       (4.75),
	   (5.00),
	   (5.25),
       (5.50),
       (5.75),
	   (6.25),
       (6.50),
       (6.75),
	   (7.00),
	   (8.25),
       (8.50),
       (8.75),
	   (9.00),
	   (9.25),
       (9.50),
       (9.75),
	   (10.00),
	   (10.25),
       (10.50),
       (10.75),
	   (11.00),
	   (11.25),
       (11.50),
       (11.75),
	   (12.00),
	   (12.25),
       (12.50),
       (12.75),
	   (13.00),
	   (13.25),
       (13.50),
       (13.75),
	   (14.00),
	   (14.25),
       (14.50),
       (14.75),
	   (15.00)


INSERT INTO Prescription_Strength(Prescription_Strength_Size)
VALUES 
	   (-0.25),
       (-0.50),
       (-0.75),
	   (-1.00),
	   (-1.25),
       (-1.50),
       (-1.75),
	   (-2.00),
	   (-2.25),
       (-2.50),
       (-2.75),
	   (-3.00),
	   (-3.25),
       (-3.50),
       (-3.75),
	   (-4.00),
	   (-4.25),
       (-4.50),
       (-4.75),
	   (-5.00),
	   (-5.25),
       (-5.50),
       (-5.75),
	   (-6.25),
       (-6.50),
       (-6.75),
	   (-7.00),
	   (-8.25),
       (-8.50),
       (-8.75),
	   (-9.00),
	   (-9.25),
       (-9.50),
       (-9.75),
	   (-10.00),
	   (-10.25),
       (-10.50),
       (-10.75),
	   (-11.00),
	   (-11.25),
       (-11.50),
       (-11.75),
	   (-12.00),
	   (-12.25),
       (-12.50),
       (-12.75),
	   (-13.00),
	   (-13.25),
       (-13.50),
       (-13.75),
	   (-14.00),
	   (-14.25),
       (-14.50),
       (-14.75),
	   (-15.00),
       (0.25),
       (0.50),
       (0.75),
	   (1.00),
	   (1.25),
       (1.50),
       (1.75),
	   (2.00),
	   (2.25),
       (2.50),
       (2.75),
	   (3.00),
	   (3.25),
       (3.50),
       (3.75),
	   (4.00),
	   (4.25),
       (4.50),
       (4.75),
	   (5.00),
	   (5.25),
       (5.50),
       (5.75),
	   (6.25),
       (6.50),
       (6.75),
	   (7.00),
	   (8.25),
       (8.50),
       (8.75),
	   (9.00),
	   (9.25),
       (9.50),
       (9.75),
	   (10.00),
	   (10.25),
       (10.50),
       (10.75),
	   (11.00),
	   (11.25),
       (11.50),
       (11.75),
	   (12.00),
	   (12.25),
       (12.50),
       (12.75),
	   (13.00),
	   (13.25),
       (13.50),
       (13.75),
	   (14.00),
	   (14.25),
       (14.50),
       (14.75),
	   (15.00)


INSERT INTO Thickness(Thickness_Size_name)
VALUES (1.50),
       (1.53),
	   (1.57),
       (1.59),
	   (1.61),
       (1.67),
	   (1.74)

-- TODO: Orders
-- TODO: Order_Itmes
INSERT INTO Order_Type(Order_Type_Name)
VALUES	('IN HOSE'),
		('ONLINE')

-- TODO: Cart
-- TODO: Cart_Items

-- TODO: People
-- TODO: Users

INSERT INTO User_Roles(User_Role_Name)
VALUES	('EMPLOYEE'),
		('ONER'),
		('CUSTOMER')



-- TODO: Employees
-- TODO: Customers
-- TODO: Oner

INSERT INTO Calendar_Types(Calendar_Type_Name)
VALUES	('EMPLOYEE'),
		('ONER'),
		('CUSTOMER'),
		('OPTOMETRIST')


INSERT INTO Scheduling_Purpose(Scheduling_Purpose_Name)
VALUES	('Task'),
		('staff meeting'),
		('Event'),
		('Dayoff'),
		('Appointment'),
		('Sickleave'),
		('Meeting'),
		('fitting glasses')


--TODO: Scheduling_In_Calendar table 
--TODO: Calender_Authorization

INSERT INTO Calender_Scheduling_Authorization(Role,Scheduling_Purpose_Type)
VALUES	(1,1),
		(1,3),
		(1,5),
		(1,7),
		(2,1),
		(2,2),
		(2,3),
		(2,5),
		(2,6),
		(2,7),
		(2,8),
		(3,5),
		(3,8)

--TODO: Calender_Authorization -- maybe not in the end?
--TODO: Payments
INSERT INTO Payment_Methods(Payment_Method_Name)
VALUES	('Cash'),
		('Credit Card')


INSERT INTO Payment_Status(Payment_Status_Name)
VALUES	('paid'),
		('pending'),
		('Rejected-card')


--select * from JobStatus

--  
--select * from Collections 
--select * from Category 
--select * from Brands 
--select * from Colors 
--select * from Shapes 
-- select * from Cylinder 


--select * from Lens_Coating
--select * from Lenses
--select * from Cylinder
--select * from Prescription_Strength

-- select * from Glasses


-- select * from Cart
-- select * from Users
-- select * from Cart_Items
--	select * from Product_Type


	end
`;


module.exports = 'select * from brands ';
