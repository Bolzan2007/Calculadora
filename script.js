const display = document.getElementById('display')

function appendCharacter(char) {
    if (display.innerText === '0') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculateResult() {
    let result = display.innerText.replace('x', '*').replace('÷', '/');
    try {
        display.innerText = eval(result);
    } catch {
        display.innerText = 'Error';
    }
}