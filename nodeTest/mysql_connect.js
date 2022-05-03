const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql\$adm"
});

connection.connect(function(err) {
  if (err) {
    console.log('Failed to connect.', err.message);
    process.exit(1);
  }
  console.log('Connected!');
});