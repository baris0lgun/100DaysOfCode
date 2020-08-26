let email;
let password;
let emailLogin;
let passwordLogin; 
logIn = () => {
    email = localStorage.getItem('email')
    password = localStorage.getItem('password')
    emailLogin = document.querySelector('#email').value
    passwordLogin = document.querySelector('#password').value

    if (email == emailLogin && password == passwordLogin) {
        alert('login successful')
    }else {
        console.log(email, emailLogin, password, passwordLogin)
        alert('unsuccessful')
    }
    
}

