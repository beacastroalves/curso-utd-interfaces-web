const filmes = [
  { protagonista: 'Alladin', filme: 'Alladin e a Lâmpada Mágica', genero: ['aventura'] },
  { protagonista: 'Soluço', filme: 'Como treinar seu dragão', genero: ['aventura', 'comédia'] },
  { protagonista: 'Neo', filme: 'Matrix', genero: ['ação', 'ficção cientifica'] },
  { protagonista: 'Sarah Connors', filme: 'Exterminador do Futuro', genero: ['ação', 'terror', 'ficção cientifica'] },
  { protagonista: 'Jack Skellington', filme: 'O estranho mundo de Jack', genero: ['aventura', 'comédia'] }
];

const filtroPorGenero = filmes.filter(filme => {
  const genero = filme.genero;

  for(let g of genero) {
    if(g.includes('comédia')) {
      return filme;
    }
  }
});
// console.log(filtroPorGenero);

filmes.filter(({ genero }) => genero.includes('aventura')).forEach(filme => console.log(filme));