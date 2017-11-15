INSERT INTO users (name, password)
VALUES ("Darnell", "pw1"),
("Reyna", "pw2"),
("Trent","pw3"),
("Bethany","pw4");

INSERT INTO saved_outfits (outfitspath, userID)
VALUES ("/assets/images/D_outfit.jpg", 1),
("/assets/images/T_outfit.jpg", 1),
("/assets/images/jersey.jpg", 1),
("/assets/images/maleoutfit1.jpg", 1),
("/assets/images/Red-Outfit.jpg", 2),
("/assets/images/B_outfit.jpg", 2),
("/assets/images/R_outfit.jpg", 2);

INSERT INTO clothes (imagepath, clothesType, isTop, isBottom, isShoe, isAcc, userID)
VALUES ("/assets/images/D_shirt.jpg", "top", 1, 0, 0, 0, 1),
("/assets/images/jersey.jpg", "top", 1, 0, 0, 0, 1),
("/assets/images/maleshirt1.jpg", "top", 1, 0, 0, 0, 1),
("/assets/images/maleshirt2.jpg", "top", 1, 0, 0, 0, 1),

("/assets/images/blouse.jpg", "top", 1, 0, 0, 0, 2),
("/assets/images/blouse2.jpg", "top", 1, 0, 0, 0, 2),
("/assets/images/blouse3.jpeg", "top", 1, 0, 0, 0, 2),
("/assets/images/blouse4.jpg", "top", 1, 0, 0, 0, 2),
("/assets/images/blouse5.jpg", "top", 1, 0, 0, 0, 2),
("/assets/images/blouseflower.jpg", "top", 1, 0, 0, 0, 2),

("/assets/images/jeans1.jpg", "bottom", 0, 1, 0, 0, 1),
("/assets/images/T_bottoms.jpg", "bottom", 0, 1, 0, 0, 1),

("/assets/images/whitepans.jpg", "bottom", 0, 1, 0, 0, 2),
("/assets/images/skirt.jpeg", "bottom", 0, 1, 0, 0, 2),
("/assets/images/skirt2.jpg", "bottom", 0, 1, 0, 0, 2),
("/assets/images/skirt3.jpeg", "bottom", 0, 1, 0, 0, 2),

("/assets/images/maleshoes1.jpg", "shoes", 0, 0, 1, 0, 1),
("/assets/images/maleshoes2.jpg", "shoes", 0, 0, 1, 0, 1),
("/assets/images/maleshoes3.jpg", "shoes", 0, 0, 1, 0, 1),
("/assets/images/hikingboots.jpg", "shoes", 0, 0, 1, 0, 1),

("/assets/images/R_shoes.jpg", "shoes", 0, 0, 1, 0, 2),
("/assets/images/shoes2.jpg", "shoes", 0, 0, 1, 0, 2),
("/assets/images/shoes3.jpg", "shoes", 0, 0, 1, 0, 2),
("/assets/images/shoes4.jpg", "shoes", 0, 0, 1, 0, 2),
("/assets/images/shoes5.jpg", "shoes", 0, 0, 1, 0, 2),
("/assets/images/shoes6.jpg", "shoes", 0, 0, 1, 0, 2),

("/assets/images/malewatch.jpg", "accessory", 0, 0, 0, 1, 1),
("/assets/images/beanie.jpg", "accessory", 0, 0, 0, 1, 1),
("/assets/images/cap.jpg", "accessory", 0, 0, 0, 1, 1),
("/assets/images/tie.jpg", "accessory", 0, 0, 0, 1, 1),
("/assets/images/watch.jpg", "accessory", 0, 0, 0, 1, 1),

("/assets/images/B_earrings.jpg", "accessory", 0, 0, 0, 1, 2),
("/assets/images/bracelet.jpg", "accessory", 0, 0, 0, 1, 2),
("/assets/images/necklace.jpg", "accessory", 0, 0, 0, 1, 2),
("/assets/images/necklace2.jpg", "accessory", 0, 0, 0, 1, 2),
("/assets/images/ring.jpg", "accessory", 0, 0, 0, 1, 2);