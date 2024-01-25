//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';
//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// Lembrando que a forma acima , já feita antes, não esta errada porém refatora-se o codigo para manter boas praticas e mais limpo como no exemplo abaixo.
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial();
//exibirTextoNaTela('h1', 'Jogo do número secreto');
//exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    //corpor da função
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto como ${tentativas} ${palavraTentativa}!`;
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
        } 
        else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                //tentativa = tentativas +1;
                tentativas++;
                limparCampo();
        }
}

//function verificarChute() {
    //corpor da função
  //  let chute = document.querySelector('input').value;
 //   console.log(chute == numeroSecreto);
//}
//O tipo booleano é um nome muito comum para outras linguagens de programação também. É um valor que pode ser verdadeiro ou falso.

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;

    }
}

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }

        function reiniciarJogo() {
            numeroSecreto = gerarNumeroAleatorio();
            limparCampo();
            tentativas = 1;
            exibirMensagemInicial();
            document.getElementById('reiniciar').setAttribute('disabled', true)
        }