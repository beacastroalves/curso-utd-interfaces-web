export class Compra {

  #cliente
  #produtos = new Map();

  constructor(cliente) {
    this.#cliente = cliente;
  }

  adicionarProduto(produto, quantidade) {

    this.#produtos.set(produto, quantidade);
  }

  removerProduto(produto) {
    this.#produtos.delete(produto);
  }

  listarProdutos() {
    for(let [{nome, preco}, quantidade] of this.#produtos) {
      console.log(nome, preco, 'x', quantidade, '=', preco * quantidade);
    }
  }

  calcularPrecoTotal() {
    let total = 0;

    for(let [{ preco }, quantidade] of this.#produtos) {
      total += preco * quantidade;
    }
    return total;
  }
}