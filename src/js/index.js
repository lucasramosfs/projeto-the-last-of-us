// alert('Olá'); para ver se esta funcionando, é um alérta
/* comentário multilinhas */

/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo corrspondente

    - passso 1 - dar um jeito de pegar o elemento HTML dos botões 

    - passo 2 - dar um jeito de identificar o clique do usuario no botão

    - passo 3 - desmarcar o botão selecioado anterior

    - passo 4 - marcar o botão clicando como se estivesse selecionada

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

//passso 1 - dar um jeito de pegar o elemento HTML dos botões 

//console.log()  mostra algo dentro do console em inspecionar
const botoesCarrossel = document.querySelectorAll('.botao'); //pegando tudo que tem a classe botao. "const" = constante
const imagens = document.querySelectorAll('.imagem');

//passo 2 - dar um jeito de identificar o clique do usuario no botão

/*
const botao1 = document.getElementById('botao1') //pegando elemento pelo id
botao1.addEventListener('click', () => {
    console.log('clicou no botão 1');
}) // () => {} isso é uma função
*/

//uma forma sem repetição de fazer o mesmo de cima
botoesCarrossel.forEach((botao, indice) => { //forEach = laço
    botao.addEventListener('click', () => {

        //passo 3 - desmarcar o botão selecioado anterior
        desativarBotaoDesativado(); //está removendo a classe selecionado, que é ela onde esta a cor verde

        //passo 4 - marcar o botão clicando como se estivesse selecionada
        selecionarBotaoCarrossel(botao); //está adicionando a classe selecionado

        //passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva(); //tirando o ativa

        //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        esconderImagemDeFundo(indice); // colocando o ativa
        
    })
})


//refactor... global
function esconderImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa'); 
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoDesativado() { 
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

