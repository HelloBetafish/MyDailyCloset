// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var closet = {
  selectAll: function(cb) {
    orm.selectAll("clothes", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  addOne: function(cols, vals, cb) {
    orm.insertOne("clothes", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne("clothes", id, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("clothes", condition, function(res) {
      cb(res);
    });
  } 
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = closet;