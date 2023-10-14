let screen = document.getElementById('screen');
let currentInput = '';
function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    screen.textContent = '0';
}

function calculate() {
    if (currentInput !== '') {
        currentInput = eval(currentInput).toString();
        screen.textContent = currentInput;
    }
}

function calculatePercentage() {
    if (currentInput !== '') {
        const result = (parseFloat(currentInput) / 100).toString();
        currentInput = result;
        screen.textContent = result;
    }
}
function makeNegative() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        screen.textContent = currentInput;
    }
}

const colorButton = document.getElementById('colorButton');


colorButton.addEventListener('click', changeInterfaceColor);


function changeInterfaceColor() {

    const calculator = document.querySelector('.calculator');
    calculator.style.backgroundColor = getRandomColor(); 

    const screen = document.getElementById('screen');
    screen.style.color = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
