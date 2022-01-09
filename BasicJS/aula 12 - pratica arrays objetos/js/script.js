function meuEscopo(){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  function recebeEventoForm(evento){
    evento.preventDefault();

    let nome = form.querySelector('.nome');
    let sobrenome = form.querySelector('.sobrenome');
    let peso = form.querySelector('.peso');
    let altura = form.querySelector('.altura');

    pessoas.push({ // add os dados dentro desse objeto e passando para o array pessoas
      nome: nome.value, // deve-se passar sempre a chave e o valor
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener('submit', recebeEventoForm) // O método addEventListener () anexa um manipulador de eventos ao elemento especificado.
  // Sintaxe - element.addEventListener(event, function)
}
meuEscopo()
