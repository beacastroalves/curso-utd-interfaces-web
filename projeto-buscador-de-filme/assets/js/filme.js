import { chave } from './chave.js';
import { criaPainel } from './painel.js'

const url = `http://www.omdbapi.com/?apikey=${chave}`;
const mainRef = document.querySelector('main');
const tituloRef = document.querySelector('#titulo');
const buscarRef = document.querySelector('#buscar');
const painelRef = document.querySelector('#painel');


buscarRef.addEventListener('click', () => {
  if (!tituloRef.value) {
    window.alert('Tente novamente com nome do filme em inglês');
    return;
  }

  fetch(`${url}&t=${tituloRef.value}`)
    .then(resposta => resposta.json())
    .then(filme => criaPainel(painelRef, filme))
    .catch(erro => console.log(erro));
});
