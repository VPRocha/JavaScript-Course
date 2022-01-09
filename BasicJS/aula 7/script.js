// Expressões regulares de JavaScript
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n) // me retorna a posição em que começa essa palavra

// Use uma expressão regular para fazer uma pesquisa sem distinção entre maiúsculas e
// minúsculas por "w3schools" em uma string:
let text2= "Visit W3Schools";
let n2 = text.search(/w3schools/i);
console.log(n2)

// O replace()método substitui um valor especificado por outro valor em uma string:
let text3 = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result)
