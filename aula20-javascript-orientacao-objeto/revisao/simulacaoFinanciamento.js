import Cliente from './model/Cliente.js';

const cliente = new Cliente('Fernando Pessoa', 26, '876893673');

console.log('matricula: ', cliente.matricula,' nome: ', cliente.nome, ' idade: ', cliente.idade);
console.log(cliente.pedirFinanciamento(401000));