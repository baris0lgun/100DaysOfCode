const numbers = document.querySelectorAll('[data-numbers]');
const output = document.querySelector('[data-output]')


numbers.forEach(button => button.addEventListener('click', function () {
    output.innerText = output.innerText + button.innerText;
}, false));

function clear() {
    output.innerText = '';
}

function popAlert() {
    alert('numLock')
}

function enter() {
    alert(output.innerText)
    clear();

}

const buttonColor = document.querySelector('.button-color')

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(e) {
    console.log(e.keyCode)
    if (e.keyCode == '144' && buttonColor.style.backgroundColor !== 'red') {
        buttonColor.style.backgroundColor = 'red'
    }else{
        buttonColor.style.backgroundColor = 'blue'
    }
}