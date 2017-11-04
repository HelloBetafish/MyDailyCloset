DROP DATABASE IF EXISTS closet_db;
CREATE database closet_db;
USE closet_db;

CREATE TABLE users(
userID int NOT NULL auto_increment,
name VARCHAR(50),
password VARCHAR(50) NOT NULL,
PRIMARY KEY(userID)
);

CREATE TABLE clothes(
clothesID int NOT NULL auto_increment,
imagepath VARCHAR(100),
clothestype VARCHAR(50),
favorite BOOLEAN NOT NULL DEFAULT 0,
userID int NOT NULL,
PRIMARY KEY(clothesID),
FOREIGN KEY(userID) REFERENCES users(userID)
);

CREATE TABLE saved_outfits(
outfitsID int NOT NULL auto_increment,
oufitspath VARCHAR(100),
favorite BOOLEAN NOT NULL DEFAULT 0,
userID int NOT NULL,
PRIMARY KEY(outfitsID),
FOREIGN KEY(userID) REFERENCES users(userID)
);