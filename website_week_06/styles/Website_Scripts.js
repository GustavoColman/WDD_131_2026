// Primeiro, eu defino quais serão as imagens e os textos do slide
const slides = [
    {
        img: "imagem-placeholder-1.jpg",
        texto: "Esta é a primeira arte. Um guerreiro poderoso em um cenário desértico."
    },
    {
        img: "imagem-placeholder-2.jpg",
        texto: "Aqui temos a segunda obra. Detalhes de iluminação e sombreamento épico."
    },
    {
        img: "imagem-placeholder-3.jpg",
        texto: "A terceira imagem foca na modelagem 3D e texturas avançadas."
    },
    {
        img: "imagem-placeholder-4.jpg",
        texto: "Por fim, a quarta imagem mostra a versatilidade do Colman Studios."
    }
];

// Variável para controlar qual slide está aparecendo (começa no zero)
let indiceAtual = 0;

// Seleciono os elementos que vou manipular
const container = document.querySelector('.slide-container');
const imgElemento = document.getElementById('main-image');
const textoElemento = document.getElementById('main-text');

function mudarSlide() {
    // 1. Adiciono a classe que deixa o slide transparente
    container.classList.add('fade-out');

    // 2. Espero um tempinho (800ms) para a imagem sumir totalmente antes de trocar
    setTimeout(() => {
        // Aumento o índice ou volto para o zero se chegar no fim da lista
        indiceAtual = (indiceAtual + 1) % slides.length;

        // Troco o SRC da imagem e o texto
        imgElemento.src = slides[indiceAtual].img;
        textoElemento.textContent = slides[indiceAtual].texto;

        // 3. Removo a classe de transparência para ele reaparecer suavemente
        container.classList.remove('fade-out');
    }, 800); 
}

// Configuro para mudar o slide automaticamente a cada 4 segundos
setInterval(mudarSlide, 4000);