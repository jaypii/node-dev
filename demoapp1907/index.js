const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

// Simple request time logger
app.use('/things',(req, res, next) => {
   console.log("A new request received at " + Date.now());
   next();
});

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json())

// Routes
app.get('/first_template', (req, res) => {
   res.render('first_view');
});

app.get('/things', (req, res) => {
   res.send('Things');
});

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
   res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
   res.send(req.params.id);
});

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on port ' +  port +' ...'));