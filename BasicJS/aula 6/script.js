// interando sobre uma string
const umaString = "Hello World!"

console.log(umaString[0])
console.log(umaString[1])
console.log(umaString[2])
//...
// como descobrir em qual indice começa alguma paralavra na string:
console.log(umaString.indexOf('World')) // retorna o indice em que se encontra a primeira letra de world

console.log(umaString.indexOf('o', 2)) // retorna o indice de o a partir do indice 2 que foi indicado