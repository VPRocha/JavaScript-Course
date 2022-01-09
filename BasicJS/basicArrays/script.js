// arrays - armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave

            //0123 indexar uma string normal
const nome = 'Luiz';
            // 1         2          3       indexar um array
const nomes = ['Luiz', 'Vanessa', 'Claudia'];

console.log(nomes) // array completo
console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])

//----------------------------------------------------------------\\
// alterando o array pelo indice
nomes[2] = 'joao'
console.log(nomes)

//----------------------------------------------------------------\\
// adicionando um elemento ao final do array
nomes.push('Maria')
console.log(nomes)
// adicionando um elemento ao começo do array
nomes.unshift('Lucas')
console.log(nomes)
// remove do final/inicio
let removido = nomes.pop() // armazenando o nome do removido / remove do final
// let removido = nomes.shift() remove do inicio
console.log(nomes)
console.log(removido)

