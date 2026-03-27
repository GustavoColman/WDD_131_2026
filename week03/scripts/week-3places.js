//  Pegar o ano atual do sistema do meu pc ( por que o comentario é diferente em cada linguagem disgraçaaaaaaaaaaaaaaa)
const ano = document.querySelector("#currentyear");
const today = new Date();
ano.innerHTML = today.getFullYear();

//  Pega a data da última modificação do documento
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;


// aqui começa as programagems // 

// 1. Definir variáveis estáticas da tarefa
const temperature = 10;
const windSpeed = 5;

// 3. Função calculateWindChill (Fórmula para Celsius em uma linha)
// Fórmula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16

const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// 4. Lógica de exibição ao carregar a página, mostra o resultado no html
const displayWindChill = () => {
    const windChillElement = document.querySelector("#wind-chill");

    // Verificação das condições métricas (Temp <= 10 e Vento > 4.8)
    if (temperature <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${result} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
};

// Chamar a função ao carregar o documento
window.addEventListener("load", displayWindChill);