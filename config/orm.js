// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  select: function(table, condition, cb) {
    var sqlQuery = "SELECT * FROM " + table;
    sqlQuery += " WHERE ";
    sqlQuery += condition;

    connection.query(sqlQuery, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var sqlQuery = "INSERT INTO " + table;

    sqlQuery += " (";
    sqlQuery += cols.toString();
    sqlQuery += ") ";
    sqlQuery += "VALUES (";
    sqlQuery += printQuestionMarks(vals.length);
    sqlQuery += ") ";

    console.log(sqlQuery);

    connection.query(sqlQuery, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var sqlQuery = "UPDATE " + table;

    sqlQuery += " SET ";
    sqlQuery += objToSql(objColVals);
    sqlQuery += " WHERE ";
    sqlQuery += condition;

    console.log(sqlQuery);
    connection.query(sqlQuery, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var sqlQuery = "DELETE FROM " + table;
    sqlQuery += " WHERE ";
    sqlQuery += condition;

    connection.query(sqlQuery, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  newUser: function(tableName, cols, vals, cb) {
    // var sqlQuery = "INSERT INTO " + tableName;
    // sqlQuery += " (";
    // sqlQuery += cols.toString();
    // sqlQuery += ") ";
    // sqlQuery += " VALUES (";
    // sqlQuery += printQuestionMarks(vals.length); 
    // sqlQuery += ") ";
    var sqlQuery = "SELECT * FROM " + tableName;

    sqlQuery += " WHERE name ='";
    sqlQuery += vals[0];
    sqlQuery += "' and password = '";
    sqlQuery += vals[1];
    sqlQuery += "'";

    console.log(sqlQuery);

    connection.query(sqlQuery, function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
