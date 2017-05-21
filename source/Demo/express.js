//g?i t?i module express
var express = require('express');
//khoi tao doi tuong
var app = express();
app.get('/', function(req, res){
  //tra ket qua cho client
  res.send('Ung dung Express dau tien');
});
//lang nghe cong 30000
app.listen(3000);
