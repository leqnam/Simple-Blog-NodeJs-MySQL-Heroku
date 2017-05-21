var mysql = require('mysql');
var connection = mysql.createConnection({
      host     : 'localhost',
      port     : '3307',
      user     : 'root',
      password : 'usbw',
      database : 'cnpm-hutech'
  });

connection.connect(function(error){
	if (!!error) {
		console.log('Kết nối thất bại');
	}else{
		console.log('Kết nối thành công');
	}
});

connection.query('SELECT * FROM category', function(err, rows, fields) {
  if (!err)
    console.log('Dữ liệu là: ', rows);
  else
    console.log('Lỗi!!!');
});

connection.end();