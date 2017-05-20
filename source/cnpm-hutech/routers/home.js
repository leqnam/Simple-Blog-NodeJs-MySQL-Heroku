var db = require('../configs/connect');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    db.getPosts(function(err, results) {
        if (err) {
            res.send(500, "Lỗi cmnr :(");
            return;
        }
        res.render('pages/home', {
            posts: results
        });
    });
});

module.exports = router;


// Old way
// var _ = require('underscore');
// var db = require('../configs/connect');
// exports.index = function (req, res) {
//   db.getCategories(function (err, results) {
//     if (err) {
//       res.send(500, "Server Error");
//       return;
//     }
//     res.render('post/index', {
//       posts: results
//     });
//   });
// };