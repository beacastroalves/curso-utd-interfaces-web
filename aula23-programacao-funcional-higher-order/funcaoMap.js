const filmes = [
  { protagonista: 'Alladin', filme: 'Alladin e a Lâmpada Mágica' },
  { protagonista: 'Soluço', filme: 'Como treinar seu dragão' },
  { protagonista: 'Neo', filme: 'Matrix' },
  { protagonista: 'Sarah Connors', filme: 'Exterminador do Futuro' },
  { protagonista: 'Jack Skellington', filme: 'O estranho mundo de Jack' }
];

filmes.map( ({ protagonista }) => protagonista).forEach(nome => console.log(nome));