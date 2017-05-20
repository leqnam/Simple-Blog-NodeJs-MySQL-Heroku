var db = require('../configs/connect');
var express = require('express');
var router = express.Router();

router.get('/:pid', function(req, res) {
    db.getPost(req.params.pid, function(err, results) {
        if (err) {
            res.send(500, "Lỗi cmnr :(");
            return;
        }
        res.render('pages/post', {
            post: results
        });
    });
});

router.get('/', function(req, res) {
    return res.redirect('/');
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