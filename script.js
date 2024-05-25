const display = document.getElementById('display');

function appendCharacter(char) {
    // Se o display estiver mostrando 0, substitua-o pelo caractere
    if (display.innerText === '0') {
        display.innerText = char;
    } else {
        // Caso contrário, adicione o caractere ao texto atual do display
        display.innerText += char;
    }
}

function clearDisplay() {
    // Limpa o display, definindo o texto para 0
    display.innerText = '0';
}

function calculateResult() {
    // Substitui 'x' por '*' e '÷' por '/' para avaliação
    let result = display.innerText.replace('x', '*').replace('÷', '/');
    try {
        // Avalia a expressão e exibe o resultado
        display.innerText = eval(result);
    } catch {
        // Em caso de erro na avaliação, exibe 'Error'
        display.innerText = 'Error';
    }
}
