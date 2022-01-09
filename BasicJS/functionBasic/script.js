function saudacao(nome){ // parametro é similar a uma variável
  return `Olá, ${nome}`;
}

let variavel = saudacao('Vanessa');  // chamando a função para que ela seja executada
console.log(variavel);

//----------------------------------------------------------------\\

function soma(num1, num2){
  const resultado = num1 + num2;
  return resultado // nada depois do return será executado, o js entende que deve parar de executar no momento em que chega no return
  console.log(resultado);
}
// console.log(resultado) // não posso acessar ou modificar nada fora da função
console.log(soma(2,5));

//----------------------------------------------------------------\\
// função anonima
const raiz = function(n){
  return n ** 0.5
};
console.log(raiz(5));

// arrow function
const raizz = (n) => n ** 0.5; // simplificando a vida do programador *-*
console.log(raizz(5));