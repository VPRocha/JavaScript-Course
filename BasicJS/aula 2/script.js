let myName = "Vanessa"; // Variavél declarada
myName = "Samanta"; // Inicializando a variável

console.log(`My name is ${myName}`);
// ---------------------------------------------------------------- \\
const nameConstant = "Vanessa";
// nameConstant = "Samanta"; // Erro. Não pode mudar o valor de uma constante

console.log(nameConstant)
// ---------------------------------------------------------------- \\
const firstNum = 5; // não perde valor
const secondNum = 10; // não perde valor
const result = firstNum * secondNum; // não perde valor
let resultDuplicate = result * 2;
resultDuplicate += 5; // por usar let, perdeu-se o valor da variável resultDuplicate acima, pois agora ela assumiu esse valor

console.log(resultDuplicate)