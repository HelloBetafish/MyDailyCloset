// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var closet = {
  displayType: function(condition, cb) {
    orm.select("clothes", condition, function(res) {
      cb(res);
    });
  },
  displayOutfits: function(condition, cb) {
    orm.select("saved_outfits", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  uploadClothes: function(cols, vals, cb) {
    orm.create("clothes", cols, vals, function(res) {
      cb(res);
    });
  },
    // The variables cols and vals are arrays.
  uploadOutfit: function(cols, vals, cb) {
    orm.create("saved_outfits", cols, vals, function(res) {
      cb(res);
    });
  },
  favClothes: function(objColVals, condition, cb) {
    orm.update("clothes", objColVals, condition, function(res) {
      cb(res);
    });
  },
  favOutfits: function(objColVals, condition, cb) {
    orm.update("saved_outfits", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteClothes: function(condition, cb) {
    orm.delete("clothes", condition, function(res) {
      cb(res);
    });
  },
  deleteOutfit: function(condition, cb) {
    orm.delete("saved_outfits", condition, function(res) {
      cb(res);
    });
  },
  login: function(cols, vals, cb) {
    orm.newUser("users", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = closet;