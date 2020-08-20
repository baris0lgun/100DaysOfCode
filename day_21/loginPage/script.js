let userData

let minLength = {
    createUserNameMinLength: '',
    createPaswordMinLength: '',
    userUsernameMinLength: '',
    userPasswordMinLength: '',
}

setMinLength = () => {
    minLength.createUserNameMinLength = document.querySelector('#create-username').minlength
    minLength.createPaswordMinLength = document.querySelector('#create-password').minlength
    minLength.userUsernameMinLength = document.querySelector('#log-in-username').minlength
    minLength.userPasswordMinLength = document.querySelector('#log-in-password').minlength
}

let user = {
    username: '',
    password: '',
    logInUsername: '',
    logInPassword: '',
}


setUserData = () => {

    user.username = document.querySelector('#create-username').value
    user.password = document.querySelector('#create-password').value

    if (user.username.length < 8 || user.username.length > 12) {
        alert('check your username its lenth is lower than 8 or higher than 12')
        user.username = '';
        user.password = '';

    }else if (user.password.length < 8) {
        alert('check your password its length is lower than 8 or higher than 12')
        user.username = '';
        user.password = '';
    }

    console.log(user.username)
    console.log(user.password)

}

signIn = () => {
    user.logInUsername = document.querySelector('#log-in-username').value
    user.logInPassword = document.querySelector('#log-in-password').value
    console.log(user.logInUsername);
    console.log(user.logInPassword);
    if (user.logInUsername == user.username && user.logInPassword == user.password) {
        alert('you have signed in')
    }
}