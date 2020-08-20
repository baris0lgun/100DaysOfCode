let output = document.querySelector('#output').innerText
let result
let buttonValue
let a
let b

document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener('click', (e) => {
        buttonValue = e.target.innerText

        document.querySelector('#output').innerText = document.querySelector('#output').innerText + buttonValue
        console.log(output)
    })
})
setAValue = () => {
    a = document.querySelector('#output').innerText
    clearAll()
    console.log(a)
}

setBValue = () => {
    b = document.querySelector('#output').innerText
    clearAll()
    console.log(b)
}

clearAll = () => {
    document.querySelector('#output').innerText = ''
}

calculateHupo = () => {
    debugger
    if (a == '' && a == 0) {
        return;
    }
    if (b == '' && b == 0) {
        return;
    }

    result = a * a + b * b;

    document.querySelector('#output').innerText = result

    result = 0;
}