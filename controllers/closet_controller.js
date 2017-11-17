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
  res.render("login");
});

router.post("/api/login", function(req, res) {
  console.log("test");
  console.log(res);
  closet.login(
    ["name", "password"],
    [req.body.username, req.body.password],
    function(result) {
      // Send back the ID of the new burger
      //res.json({ id: result.insertId });
      console.log("query result");
      console.log(result);
      if (result.length === 0) {
        //window.location.reload(true);
        res.json(result);
      }
      else {
        //console.log(result[0].userID);
        res.json(result[0].userID);
      }
    }
  );
});
// Index Home Page
router.get("/home/:userID", function(req, res) {
  var condition = "userID = " + req.params.userID + " LIMIT 1";
  closet.displayOutfits(condition, function(data) {
    var hbsObject = {
      todaysOutfit: data
    };
    console.log(hbsObject);
    res.render("home", hbsObject);
  });
});

// Carousel Page
router.get("/createOutfit/:userID", function(req, res) {
    var condition = "userID = " + req.params.userID;
    closet.displayType(condition, function(data) {
    var hbsObject = {
    carousel: data
  // clothes refers to var name in closet.handlebars
    };
    console.log(hbsObject);
    res.render("createoutfit", hbsObject);
  });
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

router.post("/closet/:userID", function(req, res) {
  if(req.body.clothesType === "top"){
    closet.uploadClothes(
      ["imagepath", "clothesType", "isTop", "userID"],
      [req.body.imagepath, req.body.clothesType, 1, req.params.userID],
      function(result) {
        // Send back the ID of the new item
        res.json({ id: result.insertId });
      }
    );
  }
  else if(req.body.clothesType === "bottom"){
    closet.uploadClothes(
      ["imagepath", "clothesType", "isBottom", "userID"],
      [req.body.imagepath, req.body.clothesType, 1, req.params.userID],
      function(result) {
        // Send back the ID of the new item
        res.json({ id: result.insertId });
      }
    );
  }
  else if(req.body.clothesType === "shoes"){
    closet.uploadClothes(
      ["imagepath", "clothesType", "isShoe", "userID"],
      [req.body.imagepath, req.body.clothesType, 1, req.params.userID],
      function(result) {
        // Send back the ID of the new item
        res.json({ id: result.insertId });
      }
    );
  }
  else if(req.body.clothesType === "accessory"){
    closet.uploadClothes(
      ["imagepath", "clothesType", "isAcc", "userID"],
      [req.body.imagepath, req.body.clothesType, 1, req.params.userID],
      function(result) {
        // Send back the ID of the new item
        res.json({ id: result.insertId });
      }
    );
  }
});

router.post("/outfits/:userID", function(req, res) {
  closet.uploadOutfit(
    ["outfitspath", "userID"],
    [req.body.outfitspath, req.params.userID],
    function(result) {
      // Send back the ID of the new outfit
      res.json({ id: result.insertId });
    }
  );
});

router.put("/closet/:userID/:clothesID", function(req, res) {
  var condition = "clothesID = " + req.params.clothesID;
  console.log("condition", condition);

  closet.favClothes(
    {
      favorite: req.body.favorite
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.put("/outfits/:userID/:outfitsID", function(req, res) {
  var condition = "outfitsID = " + req.params.outfitsID;
  console.log("condition", condition);

  closet.favOutfits(
    {
      favorite: req.body.favorite
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
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
