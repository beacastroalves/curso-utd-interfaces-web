import { Produto } from './model/produto.js';
import { Cliente } from './model/cliente.js';
import { Compra } from './model/compra.js';
import { produtos } from './bd/produtos.js';

// produtos.forEach(p => console.log('codigo: ', p.codigo, ' nome: ', p.nome, ' preco: ', p.preco, ' tipo: ', p.tipo, '\n'));

const c1 = new Cliente('9990', 'Lucia Andrade', 'bronze');

const comp1 = new Compra(c1);

function findByCodigo(codigo) {
  return produtos.find(p => p.codigo === codigo);
}

comp1.adicionarProduto(findByCodigo('1111'), 5);
comp1.adicionarProduto(findByCodigo('1112'), 4);
comp1.adicionarProduto(findByCodigo('1120'), 2);
comp1.adicionarProduto(findByCodigo('1121'), 5);

comp1.listarProdutos();
console.log(`Total: R$ ${comp1.calcularPrecoTotal()}`);