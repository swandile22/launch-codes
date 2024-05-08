const element = document.getElementById('myTestingData');
const userDB = JSON.parse(sessionStorage.getItem('myWebUsers'));
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

console.log(userDB);
console.log(currentUser);
console.log(userDB[currentUser]);