// Espera a página carregar
document.addEventListener("DOMContentLoaded", () => {
    // 1. Tenta obter o valor atual do contador do localStorage
    // 'numReviews' é o nome da "chave" que vamos usar
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    // 2. Incrementa o contador
    numReviews++;

    // 3. Guarda o novo valor de volta no localStorage
    window.localStorage.setItem("numReviews-ls", numReviews);

    // 4. (Opcional) Exibe o valor na página para o utilizador ver
    const displayElement = document.querySelector("#review-count");
    if (displayElement) {
        displayElement.textContent = numReviews;
    }
});