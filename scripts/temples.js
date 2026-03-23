//  Pegar o ano atual do sistema do meu pc ( por que o comentario é diferente em cada linguagem disgraçaaaaaaaaaaaaaaa)
const ano = document.querySelector("#currentyear");
const today = new Date();
ano.innerHTML = today.getFullYear();

//  Pega a data da última modificação do documento
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;


// Seleciona o botão e a lista de navegação
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

// Adiciona um evento de clique
menuButton.addEventListener('click', () => {
    // Alterna a classe "show" que criamos no CSS
    navigation.classList.toggle('show');
    
    // Opcional: muda o visual do botão quando aberto
    menuButton.classList.toggle('open');
});