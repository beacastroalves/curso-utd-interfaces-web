const http = require('http');

const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.write('Ola Nodejs');
  res.end();
});

server.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});