function multi(multiplicador) {
  return function (numero) {
    return multiplicador * numero;
  }
}

const multi2 = multiplicador => numero => multiplicador * numero;

const dobro = multi(2);
const triplo = multi(3);
const quadruplo = multi2(4);
const quintuplo = multi2(5);

console.log(dobro(7));
console.log(triplo(7));
console.log(quadruplo(7));
console.log(quintuplo(7));
