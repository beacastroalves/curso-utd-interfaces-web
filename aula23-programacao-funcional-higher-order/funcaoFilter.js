const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(x => x % 2 === 0);

const impares = numeros.filter(x => x % 2 !== 0);


console.log(pares);
console.log(impares);