var express = require("express");
var path = require("path");
var router = express.Router();

// Import the model (closet.js) to use its database functions.
var closet = require("../models/closet.js");


// Create all our routes and set up logic within those routes where required.

// Index Home Page which is also the login page
router.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/login.html"));
   // refers to .handlebars file that will be inserted into main.handlebars.
   res.render('login');
  });

router.get("/api/login", function(req, res) {
  console.log("test");
  console.log(res);
  closet.login(
    ["name", "password"],
    [req.query.username, req.query.password],
    function(result) {
      // Send back the ID of the new burger
      //res.json({ id: result.insertId });
      console.log("test");
      console.log(result);
      res.json({id: result.insertId});
    }
  );
});
// Index Home Page
router.get("/home/:userID", function(req, res) {
    res.render("home");
   // refers to .handlebars file that will be inserted into main.handlebars.
  });


// Carousel Page
// router.get("/createOutfit/:userID", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/createnewoutfit.html"));
//   });

router.get("/createOutfit/:userID", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createnewoutfit.html"));
  });

router.get("/closet/:userID", function(req, res) {
    var condition = "userID = " + req.params.userID;
    closet.displayType(condition, function(data) {
    var hbsObject = {
    clothes: data
  // clothes refers to var name in closet.handlebars
    };
    console.log(hbsObject);
    res.render("closet", hbsObject);
  });
});

router.get("/outfits/:userID", function(req, res) {
  var condition = "userID = " + req.params.userID;
  closet.displayOutfits(condition, function(data) {
    var hbsObject = {
      outfits: data
      // outfits refers to var name in the outfits.handlebars file
    };
    console.log(hbsObject);
    res.render("outfits", hbsObject);
    // outfits refers to outfits.handlebars file that will cycle through mySQL and display images
  });
});

router.post("/api/closet/:userID", function(req, res) {
  closet.uploadClothes([
    "imagepath", "clothestype", "userID"
  ], [
    (imagepath), req.body.clothestype, req.params.userID
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.post("/api/outfits/:userID", function(req, res) {
  closet.uploadOutfit([
    "outfitspath", "userID"
  ], [
    (outfitpath), req.params.userID
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/closet/:userID/:clothesID", function(req, res) {
  var condition = "clothesID = " + req.params.clothesID;
  console.log("condition", condition);

  closet.favClothes({
    favorite: req.body.favorite
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/outfits/:userID/:outfitsID", function(req, res) {
  var condition = "outfitsID = " + req.params.outfitsID;
  console.log("condition", condition);

  closet.favOutfits({
    favorite: req.body.favorite
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/closet/:userID/:clothesID", function(req, res) {
  var condition = "clothesID = " + req.params.clothesID;

  closet.deleteClothes(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/outfits/:userID/:outfitsID", function(req, res) {
  var condition = "outfitsID = " + req.params.outfitsID;

  closet.deleteOutfit(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// Export routes for server.js to use.
module.exports = router;