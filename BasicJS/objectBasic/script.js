const pessoa1 = {
  nome: 'Vanessa', // atributos
  sobrenome: 'Rocha',
  idade: 23,
};
const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 33,
};

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

//-------------------------------------------------\\
//criando função para fazer o trabalho de criar um objeto - facilitando o metodo usado acima

function criaPessoa (nome, sobrenome, idade) {
  return {
    nome, sobrenome, idade // quando o valor da propriedade aqui é a mesma do parametro, não precisa utilizar a forma: nome:nome
  };
}

const pessoa3 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa4 = criaPessoa('Vanessa', 'Rocha', 22);
const pessoa5 = criaPessoa('Jonas', 'Lucas', 21);
const pessoa6 = criaPessoa('Ana', 'Almeida', 28);
console.log(pessoa3.nome)
// console.log(pessoa4)
// console.log(pessoa5)
// console.log(pessoa6)

//----------------------------------------------------------------\\
const comMetodo = {
  nome: 'Vanessa', // atributos
  sobrenome: 'Rocha',
  idade: 23,

  fala(){ // quando uma função esta dentro de um objeto, ela é chamada de metodo
    console.log(`${this.nome} ${this.sobrenome} está falando oi`) // dentro do objeto o this que é muito importante pois podemos referenciar o objeto e qualquer atributo dele usando o this
                //this = referencia o objeto comMetodo
  }
};

comMetodo.fala()