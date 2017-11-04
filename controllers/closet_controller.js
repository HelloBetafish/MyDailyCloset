var express = require("express");

var router = express.Router();

// Import the model (closet.js) to use its database functions.
var closet = require("../models/closet.js");


// Create all our routes and set up logic within those routes where required.

// Need to show all 
router.get("/api/closet", function(req, res) {
  closet.displayType(function(data) {
  //   var hbsObject = {
  //     clothes: data
  // clothes refers to var name in closet.handlebars
  //   };
  //   console.log(hbsObject);
  //   res.render("closet", hbsObject);
  //  closet refers to closet.handlebars file that will cycle through mySQL and display images
  // });
});

router.get("/api/outfits/:userID", function(req, res) {
  var condition = "id = " + req.params.id;
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
});

router.post("/api/closet", function(req, res) {
  closet.uploadClothes([
    "imagepath", "clothestype", "userID"
  ], [
    (imagepath), req.body.clothestype, req.body.userID
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.post("/api/outfits", function(req, res) {
  closet.uploadOutfit([
    "outfitspath", "userID"
  ], [
    (outfitpath), req.body.userID
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/closet/:clothesID", function(req, res) {
  var id = req.body.clothesID;

  closet.favClothes(id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/outfits/:outfitID", function(req, res) {
  var id = req.body.outfitID;

  closet.favOutfit(id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/closet/:clothesID", function(req, res) {
  var condition = "id = " + req.body.clothesID;

  closet.deleteClothes(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/outfit/:outfitID", function(req, res) {
  var condition = "id = " + req.body.outfitID;

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