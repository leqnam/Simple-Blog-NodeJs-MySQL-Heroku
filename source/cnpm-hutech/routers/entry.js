var db = require('../configs/connect');
var express = require('express');
var router = express.Router();

router.get('/:pid/:ptitle', function(req, res) {
    db.getEntry(req.params.pid, function(err, results) {
        db.getEntryComments(req.params.pid, function(err2, comments) {
            if (err) {
                res.render('pages/error', {
                    code: results.code,
                    message: results.message
                });
                return;
            }
            res.render('pages/entry', {
                id: req.params.pid,
                post: results,
                comments: comments
            });
        });
    });
});

// router.post('/comment', function (req, res) {
//     db.postComment(req.body.pid, req.body.comment, function (err, results) {
//         if(!err)
//         {
//             res.send(200);
//         }
//         //res.send("Received "+ JSON.stringify(results));
//     });
// });

router.get('/', function(req, res) {
    return res.redirect('/');
});

module.exports = router;