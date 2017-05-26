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
                id: req.params.pid,
                post: results,
                comments: comments
            });
        });
    });
});

router.post('/comment', function (req, res) {
    db.postComment(req.body.pid, req.body.comment, function (err, results) {
        res.send("<script>location.reload();</script>");
        //res.send("Received "+ JSON.stringify(results));
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