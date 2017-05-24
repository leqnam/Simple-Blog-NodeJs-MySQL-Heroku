var db = require('../configs/connect');
var express = require('express');
var router = express.Router();

router.get('/:pid', function(req, res) {
    db.getPost(req.params.pid, function(err, results) {
        if (err) {
            res.render('pages/error', {
                code: results.code,
                message: results.message
            });
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