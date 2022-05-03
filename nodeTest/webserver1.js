const http = require('http');
const port = 8080;
const handle = require('./handle');

const server = http.createServer(handle); 

server.listen(port, () => {
    console.log('Server is available under http://127.0.0.1:' + port + '/');
});