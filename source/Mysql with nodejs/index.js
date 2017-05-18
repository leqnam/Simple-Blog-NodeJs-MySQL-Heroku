var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect(function(error){
	if (!!error) {
		console.log('Kết nối thất bại');
	}else{
		console.log('Kết nối thành công');
	}
});

connection.query('SELECT * FROM information', function(err, rows, fields) {
  if (!err)
    console.log('Dữ liệu là: ', rows);
  else
    console.log('Lỗi!!!');
});

connection.end();