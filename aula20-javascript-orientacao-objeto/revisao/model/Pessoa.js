export default class Pessoa {

  #nome;
  #idade;

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }
}
