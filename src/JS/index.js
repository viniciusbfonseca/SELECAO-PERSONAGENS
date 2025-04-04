


const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        // OBJETIVO 1 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM TEMOS QUE:

        // - COLOCAR A CLASSE SELECIONADO NO PERSONAGEM QUE POSSAMOS O MOUSE EM CIMA PARA ADICIONAR ANIMAÇÃO NELE

        // - RETIRAR A CLASSE SELECIONADO DO PERSONAGEM QUE ESTÁ SELECIONADO 
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        // OBJETIVO 2 -  QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM, TROCAR A IMAGEM E NOME DO PERSONAGEM GRANDE 

        // - Alterar a imagem do jogador 1

        //  Alterar o nome do jogador 1 

    });
});


