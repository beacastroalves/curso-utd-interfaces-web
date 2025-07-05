const { readFileSync, readFile } = require('fs');
const { join } = require('path');

// const path = './olaMundo.txt';

const path = join(__dirname, './olaMundo.txt');

const data = readFileSync(path, 'utf-8');

// console.log('Arquivo lido com sucesso!');
console.log('Arquivo lido com sucesso no endereço: ', __dirname);

console.log('Nome do arquivo: ', __filename);

// console.log('Conteudo do arquivo: ',data);

readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.log('erro ao tentar ler o arquivo', err);
  }
  console.log('Conteudo do arquivo:', data);
});