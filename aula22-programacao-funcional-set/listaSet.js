const lista = [
  'joao', 'joana', 'antonio', 'joana',
  'joao', 'paulo', 'maria', 'joao',
  'maria', 'joana', 'bruno', 'mariana'
];

let set = new Set(lista);

set.add('gabriel');

console.log(set);
