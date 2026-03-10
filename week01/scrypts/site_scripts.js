//  Pegar o ano atual do sistema do meu pc ( por que o comentario é diferente em cada linguagem disgraçaaaaaaaaaaaaaaa)
const ano = document.querySelector("#currentyear");
const today = new Date();
ano.innerHTML = today.getFullYear();

//  Pega a data da última modificação do documento
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;