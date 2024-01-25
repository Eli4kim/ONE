//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';
//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// Lembrando que a forma acima , já feita antes, não esta errada porém refatora-se o codigo para manter boas praticas e mais limpo como no exemplo abaixo.

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    //corpor da função
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}
//O tipo booleano é um nome muito comum para outras linguagens de programação também. É um valor que pode ser verdadeiro ou falso.

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}
