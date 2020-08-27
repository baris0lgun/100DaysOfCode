let firstName;
let surName;
let password = document.querySelector('[data-password]').value;
let email;
varuserData = {};

function inputValues() { 
    firstName = document.querySelector('#first-name').value;
    surName = document.querySelector('#surname').value;
    email = document.querySelector('#email').value;
    password = document.querySelector('[data-password]').value

    
     userData = {
        firstName,
        surName,
        email,
        password,
    }
    console.log(userData.firstName)

    localStorage.setItem('firstName', userData.firstName);
    localStorage.setItem('surName', userData.surName);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('password', userData.password)
    console.log(localStorage)
}

