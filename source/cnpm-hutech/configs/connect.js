'use strict'

var mysql = require('mysql');

// var connection = mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');

// Use Pooling connections 

var pool;

var dev = true;

if (dev) {
    pool = mysql.createPool({
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: 'usbw',
        database: 'cnpm-hutech'
    });
} else {
    pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
}

// Error messages
var message = {
    query_null: {
        "code": 500, "message": "Something went wrong."
    },
    comment_null: {
        "code": 500, "message": "No comments."
    }
};

// Get Category records
exports.getCategories = function(callback) {
    var sql = "SELECT * FROM category";
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(true, message.query_null);
            return;
        }
        connection.query(sql, function(err, results) {
            connection.release();
            if (err || !results) {
                callback(true, message.query_null);
                return;
            }
            callback(false, results);
        });
    });
};

// Get all posts
exports.getPosts = function(callback) {
    var sql = "select post.pid, post.uid, category.catid, category.catname, post.ptitle, post.pdescription, post.pdate from post, category WHERE post.catid = category.catid";
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(true, message.query_null);
            return;
        }
        connection.query(sql, function(err, results) {
            connection.release();
            if (err || !results) {
                callback(true, message.query_null);
                return;
            }
            callback(false, results);
        });
    });
};

// Get Single post by PID
exports.getPost = function(pid, callback) {
    var sql = "SELECT post.PID, post.UID, post.CATID, post.PTITLE, post.PDESCRIPTION, post.PDATE,post.PASSCODE,post.PCONTENT,post.PMETADATA,user.UNAME,user.UID,user.UMAIL,category.CATNAME FROM post INNER JOIN user ON post.UID = user.UID INNER JOIN category ON post.CATID = category.CATID where post.PID = ?";
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(true, message.query_null);
            return;
        }
        connection.query(sql, [pid], function(err, results) {
            connection.release();
            if (err || !results[0]) {
                callback(true, message.query_null);
                return;
            }
            callback(false, results[0]);
        });
    });
};

// Get comment by PID
exports.getPostComment = function(pid, callback) {
    var sql = "SELECT comment.CID,comment.PID,comment.UID,comment.CDATE,comment.CCOMMENT,user.UNAME,user.UMAIL FROM comment INNER JOIN user ON comment.UID = user.UID where PID = ?";
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(true, message.comment_null);
            return;
        }
        connection.query(sql, [pid], function(err, results) {
            connection.release();
            if (err || !results) {
                callback(true, message.comment_null);
                return;
            }
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

//
// exports.executeQuery=function(query,callback){
//     pool.getConnection(function(err,connection){
//         if (err) {
//           connection.release();
//           throw err;
//         }   
//         connection.query(query,function(err,rows){
//             connection.release();
//             if(!err) {
//                 callback(null, {rows: rows});
//             }           
//         });
//         connection.on('error', function(err) {      
//               throw err;
//               return;     
//         });
//     });
// };

// To-do: will use mysql-model to map the model schema