export function criaPainel(painel, filme) {

  const titleRef = document.querySelector('#painel-titulo');
  const yearRef = document.querySelector('#ano');
  const releasedRef = document.querySelector('#lancamento');
  const runtimeRef = document.querySelector('#duracao');
  const genreRef = document.querySelector('#genero');
  const actorsRef = document.querySelector('#atores');
  const posterRef = document.querySelector('#poster');

  titleRef.innerHTML = `<h1>${filme.Title}</h1>`;
  yearRef.innerHTML = `<p>Ano: <strong>${filme.Year}</strong></p>`;
  releasedRef.innerHTML = `<p>Lançamento: <strong>${filme.Released}</strong></p>`;
  runtimeRef.innerHTML = `<p>Duração: <strong>${filme.Runtime}</strong></p>`;
  genreRef.innerHTML = `<p>Genero: <strong>${filme.Genre}</strong></p>`;
  actorsRef.innerHTML = `<p>Atores: <strong>${filme.Actors}</strong></p>`;
  posterRef.innerHTML = `<img src="${filme.Poster}" alt="${filme.Title}">`;
}