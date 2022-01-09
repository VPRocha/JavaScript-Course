let numDigitado = parseFloat(prompt('digite seu numero:')); // o valor de prompt vai ser jogado para o parseFloat e o parseFloat vai jogar para dentro da variável
let pegaNumeroH1 = document.querySelector('.numero') // pedindo para o document pegar o elemento que eu quero por seleção de classe. Armazenando o valor daquele elemento dentro dessa variável
let pegaTextoDiv = document.querySelector('.texto') // fazendo isso, esses elementos podem ser manipulados aqui no js

pegaTextoDiv.innerHTML = ''; // deixando o valor de pegaTextoDiv vazio para receber novos valores
pegaNumeroH1.innerHTML += `seu numero é: ${numDigitado} </br>`;
pegaTextoDiv.innerHTML += `raiz quadrada: ${Math.sqrt(numDigitado)} </br>`;
pegaTextoDiv.innerHTML += `${numDigitado} é inteiro: ${Number.isInteger(numDigitado)} </br>`;
pegaTextoDiv.innerHTML += `${numDigitado} é NaN: ${Number.isNaN(numDigitado)} </br>`;
pegaTextoDiv.innerHTML += `arredondado para baixo: ${Math.floor(numDigitado)} </br>`;
pegaTextoDiv.innerHTML += `arredondado para cima: ${Math.ceil(numDigitado)} </br>`;
pegaTextoDiv.innerHTML += `com duas casas decimais: ${numDigitado.toFixed(2)} </br>`;