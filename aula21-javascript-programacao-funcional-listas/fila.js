const fila = [];
const fila02 = ['Carla', 'Ronaldo', 'Ingrid'];

fila.push('Joaquim');
fila.push('Andressa');
fila.push('Mariana');
fila.push('Graça');
fila.push('Andre');
fila.push('Carlos');

fila.shift();
fila.shift();
fila.unshift('Osvaldo');

console.log(fila.indexOf('Andre'));

console.log(fila.includes('Carlos'));

console.log(fila);

const result = fila.concat(fila02);

console.log(result);

const combine = [...fila, ...fila02];

console.log(combine)

const combine2 = [fila, fila02];

console.log(combine2.flat());

