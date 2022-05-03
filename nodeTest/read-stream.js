const fs = require('fs');
const MyReadableStream = fs.createReadStream('input.txt', {encoding: 'utf8' });
MyReadableStream.on('data' , data => {
   console.log(data);
});
MyReadableStream.on('error', err => {
   console.log(err.stack);
});
MyReadableStream.on('end', () => {
   console.log('--- The End ---');
});