let nameSurname = localStorage.getItem('firstName') + ' ' + localStorage.getItem('surName'); 

document.querySelector('#on-mind').placeholder = "whats on your mind, " + localStorage.getItem('firstName');

document.querySelector('#name-surname').innerText = nameSurname

document.querySelector('#username').innerText = localStorage.getItem("firstName")
