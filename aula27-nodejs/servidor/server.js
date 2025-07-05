const http = require('http');
const { readFileSync, readFile } = require('fs');
const { join } = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const path = join(__dirname, './olaMundo.txt');

const data = readFileSync(path, 'utf-8');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(data);
  res.end();
}).listen(port, hostname, () => {
  console.log(`Servidor em execução atualizado em http://${hostname}:${port}`);
});