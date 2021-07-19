var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql\$adm",
  database: "test_ngDB"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name,race,startclass,lvltotal FROM nwn2chars WHERE race LIKE 'Human' ORDER BY lvltotal", function (err, result, fields) {
    if (err) throw err;
    console.log('===== HUMAN CHARACTERS sorted by Levels =====\n')
    console.log(result);
  });
});