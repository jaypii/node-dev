var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err,db) => {
   useNewUrlParser: true;
   if (err) throw err;
   console.log("Database created!");
   db.close(); 
});