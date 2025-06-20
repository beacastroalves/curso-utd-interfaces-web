const notas = [10,9,9,10,10,8,8,10,9,10,7,8,8,9,10];
console.log(notas);

notas.push(3);
notas.push(7);
notas.push(4);

for(let cont = 0; cont < notas.length; cont++) {
  console.log(notas[cont]);
}
notas[1] = 4;
console.log('nota do indice [1]: ' + notas[1]);

console.log('Tamanho da lista: ' + notas.length + ' itens');

