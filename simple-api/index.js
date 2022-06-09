const express = require('express'),
path = require('path'),
app = express(),
mysql = require('mysql'),
cors = require('cors'),
bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql$adm',
    database: 'api_node_demo'
})

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// routers
const usersRouter = require('./routes/users');

// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// use router
app.use('/users', usersRouter);

// router user input
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname,'views') + '/input.html');
});

app.get('/list', function(req, res) {
  res.sendFile(path.resolve(__dirname,'views') + '/list.html');
});



// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));