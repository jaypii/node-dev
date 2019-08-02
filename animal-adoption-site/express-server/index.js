
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// set the port
const port = 8000;

// listen on the port
app.listen(port);