let profileName = localStorage.getItem('firstName') + " " + localStorage.getItem('surName')
console.log(profileName)

document.querySelector('#profile-name-h3').innerText = profileName