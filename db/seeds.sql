INSERT INTO users (name, password)
VALUES ("Darnell", "pw1"),
("Trent", "pw2"),
("Reyna", "pw3"),
("Bethany", "pw4");

INSERT INTO saved_outfits (outfitspath, userID)
VALUES ("/assets/images/D_outfit.jpg", 1),
("/assets/images/T_outfit.jpg", 1),
("/assets/images/R_outfit.jpg", 3),
("/assets/images/B_outfit.jpg", 3);

INSERT INTO clothes (imagepath, userID, isTop, isBottom, isShoe, isAcc)
VALUES ("/assets/whitepans.jpg", 1, 0, 1, 0, 0);
("/assets/blouse.jpg", 1, 1, 0, 0, 0),
("/assets/images/R_shoes.jpg", "shoes", 1, 0, 0, 1, 0),
("/assets/images/B_earrings.jpg", "accessories", 1, 0, 0, 0, 1);