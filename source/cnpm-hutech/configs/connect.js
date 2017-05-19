
'use strict'

var mysql = require('mysql');

// var connection = mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');

// Use Pooling connections 
var pool = mysql.createPool({
      host     : 'localhost',
      port     : '3307',
      user     : 'root',
      password : 'usbw',
      database : 'cnpm-hutech'
  });

// Get records
exports.getCategories = function(callback) {
  var sql = "SELECT * FROM category";
  // get a connection from the pool
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
};

// exports.getCategories = function(city, callback) {
//   var sql = "SELECT * FROM category";
//   // get a connection from the pool
//   pool.getConnection(function(err, connection) {
//     if(err) { console.log(err); callback(true); return; }
//     // make the query
//     pool.query(sql, [city], function(err, results) {
//       pool.release();
//       if(err) { console.log(err); callback(true); return; }
//       callback(false, results);
//     });
//   });
// };

// To-do: will use mysql-model to map the model schema