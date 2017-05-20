var db = require('../configs/connect');
var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
    var detail = request.body;
    db.login(1, function(err, results) {
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