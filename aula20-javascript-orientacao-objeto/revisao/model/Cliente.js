import Pessoa from './Pessoa.js';

export default class Cliente extends Pessoa {

  #matricula
  #financiamento

  get matricula() {
    return this.#matricula;
  }

  constructor(nome,idade, matricula) {
    super(nome, idade)
    this.#matricula = matricula;
  }

  pedirFinanciamento(valor) {

    let juros = 0;
    let numParcelas = 0;
    let entrada = 0;

    if(this.idade > 40) {
      numParcelas = 240;
      juros = 18;
      entrada = valor * 0.3;
    } else {
      numParcelas = 420;
      juros = 9.5;
      entrada = valor * 0.15;
    }

    let total = valor - entrada;
    let tempo = numParcelas / 12;

    let montante = total * juros * tempo / 100;

    let valorParcela = montante/numParcelas;

    return {
      valor,
      entrada,
      numParcelas,
      tempo,
      juros,
      montante,
      valorParcela
    };
  }
}