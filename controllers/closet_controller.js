var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var closet = require("../models/closet.js");


// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  closet.selectAll(function(data) {
    var hbsObject = {
      clothes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/closet", function(req, res) {
  closet.insertOne([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/closet/:id", function(req, res) {
  var id = req.params.id;
  // console.log("condition", condition);

  closet.update(id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/closet/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  closet.delete(condition, function(result) {
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