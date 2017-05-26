var db = require('../configs/connect');
var express = require('express');
var router = express.Router();

router.get('/:pid', function (req, res) {
    db.getPost(req.params.pid, function (err, results) {
        db.getPostComment(req.params.pid, function (err2, comments) {
            if (err) {
                res.render('pages/error', {
                    code: results.code,
                    message: results.message
                });
                return;
            }
            res.render('pages/post', {
                post: results,
                comments: comments
            });
        });
    });
});

router.post('/comment', function (req, res) {
    console.log(req.body.comment);
    db.postComment(req.params.pid,req.body.comment, function (err, results) {
        res.send("Received "+ JSON.stringify(err));
//        db.getPostComment(req.params.pid, function (err2, comments) {
//            if (err) {
//                res.render('pages/error', {
//                    code: results.code,
//                    message: results.message
//                });
//                return;
//            }
//            res.render('pages/post', {
//                post: results,
//                comments: comments
//            });
//        });
    });
	//res.send("Received "+ JSON.stringify(req.body.comment));
});

router.get('/', function (req, res) {
    return res.redirect('/');
});

module.exports = router;