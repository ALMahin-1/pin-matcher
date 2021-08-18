function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinSting = pin + '';
    if (pinSting.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-field').value = pin;
}


document.getElementById('calc-numbers').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const calcInput = document.getElementById('displayed-number');
    if (isNaN(numbers)) {
        if (numbers == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newcalc = previousNumber + numbers;
        calcInput.value = newcalc;
    }
});

document.getElementById('submit').addEventListener('click', function () {
    const pin = document.getElementById('pin-field').value;
    const typedPin = document.getElementById('displayed-number').value;
    const error = document.getElementById('error');
    const right = document.getElementById('right');
    if (pin == typedPin) {
        right.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        right.style.display = 'none';
        error.style.display = 'block';
    }
});