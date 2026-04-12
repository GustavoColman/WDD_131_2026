//  Pegar o ano atual do sistema do meu pc ( por que o comentario é diferente em cada linguagem disgraçaaaaaaaaaaaaaaa)
const ano = document.querySelector("#currentyear");
const today = new Date();
ano.innerHTML = today.getFullYear();

//  Pega a data da última modificação do documento
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;


//a lista de produtos para serem avaliados
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Seleciona o elemento select no HTML
const productSelect = document.querySelector("#product-name");



// Função para popular as opções
products.forEach(product => {
    // Cria um elemento de opção
    const option = document.createElement("option");
    
    // Define o valor interno (o que será enviado ao servidor) como o Nome do produto
    // ("value attribute that is the product name")
    option.value = product.name; 
    
    // Define o texto que o usuário vê (colocando a primeira letra em maiúscula para ficar bonitão)
    option.textContent = product.name.toUpperCase();
    
    // Adiciona a opção dentro do select
    productSelect.appendChild(option);
});




