const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somatorio = numeros.reduce((numero, total) => total += numero, 0);

console.log(somatorio);