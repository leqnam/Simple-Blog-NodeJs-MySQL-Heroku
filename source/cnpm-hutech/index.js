var express = require('express'),
    moment = require('moment'),
    _ = require('underscore'),
    path = require('path'),
    fs = require('fs'),
    md5 = require('./configs/md5.js'),
    bodyParser = require('body-parser'),
    app = express();



// The information showed about the poster
var userEmail = 'leqnam@live.com';
var userDisplayName = 'CNPM';
var userDescription = 'Công nghệ phần mềm';


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

app.locals._ = _;

app.locals.formatTime = function(time) {
    return moment(time).format('MMMM Do YYYY, h:mm a');
};

app.locals.hex_md5 = md5.hex_md5;
app.locals.userEmail = userEmail;
app.locals.userDisplayName = userDisplayName;
app.locals.userDescription = userDescription;

// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
});

var homeController = require('./routers/home.js');
app.use('/', homeController);

// dynamically include routes (routers)
fs.readdirSync('./routers').forEach(function(file) {
    var api = '/' + file.substr(0, file.lastIndexOf('.'));
    var url = require('./routers/' + file);
    app.use(api, url);

});


//app.get('/home',postsController.index); Old way


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});