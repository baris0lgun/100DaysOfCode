// document.querySelector('.key.one').addEventListener('click' , () => {
//     document.querySelector('#screen').innerText += '1';
// })


// document.querySelector('.key.two').addEventListener('click' , () => {
//     document.querySelector('#screen').innerText += '2';
// })


// document.querySelector('.key.three').addEventListener('click' , () => {
//     document.querySelector('#screen').innerText += '3';
// })


document.querySelector('#calculator').addEventListener('click', (event) => {
    document.querySelector('#screen').innerText += event.target.getAttribute('data-key');
})