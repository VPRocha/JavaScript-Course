let valorA = "A"; // B
let valorB = "B"; // C
let valorC = "C"; // A
const valorCoringa = valorA // A

valorA = valorB
valorB = valorC
valorC = valorCoringa

console.log(valorA, valorB, valorC)

// ------------------------------------------------------------------------------------------\\
//no JavaScript temos uma maneira mais moderna de resolver a questão acima:
let valorA1 = "A"; // B
let valorB1 = "B"; // C
let valorC1 = "C"; // A

[valorA1, valorB1, valorC1] = [valorB1, valorC1, valorA1];
// O valor segue a ordem que apontamos, então valorB1 assume o valor do primeiro indice
// que seria valorA1, valorC1 assume o valor do segundo indice que é valorB1 e valorA1 assume
// o valor do terceiro indice que é o valorC1
console.log(valorA1, valorB1, valorC1)