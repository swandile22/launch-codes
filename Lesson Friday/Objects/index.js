// myDatabase = {}
//
// function UserAccount(username, password, confirmPassword, email) {
//     this.username = username;
//     this.password = password;
//     this.confirmPassword = confirmPassword;
//     this.email = email;
//     this.cart = []
//
//     this.addToDb = function() {
//         myDatabase[this.email] = this;
//     }
//
//     this.deleteAccount = function() {
//         myDatabase[this.email] = null;
//     }
//
//     this.addToCart = function(production) {
//         this.cart.push(production);
//     }
//
//     this.viewCart = function() {
//         return this.cart;
//     }
// }
//
// function addToDb(email) {
//     myDatabase[email] = this;
// }
//
// let newUser = new UserAccount("Popbob", "p0pB0b", "p0pB0b", "samual@gmail.com");
//
// newUser.addToCart("potatos")
//
// console.log(newUser.viewCart())
//
// const data = {}


// myDatabase = {};
//
// function UserAccount (username, password, confirmPassword, email) {
//     this.username = username;
//     this.password = password;
//     this.confirmPassword = confirmPassword;
//     this.email = email;
//     this.cart = []
//
//     this.addToDb = function () {
//         myDatabase[this.email] = {username: this.username, email: this.email};
//     }
//
//     this.deleteUserAccount = function() {
//         delete myDatabase[this.email];
//     }
//
//     this.addToCart = function (products){
//         this.cart.push(products)
//     }
//
//     this.viewCart = function (){
//         return this.cart;
//     }
// }
//
// console.log(myDatabase)
// let newUser1 = userAccount1 = new UserAccount("Bro", "Code", "Code", "bro1@gmail.com");
// let newUser2 = userAccount2 = new UserAccount("Bro2", "Code", "Code", "bro2@gmail.com");
//
// newUser1.addToCart("Potatoes");
// newUser2.addToCart("Tomatoes");
//
// newUser1.addToDb();
// newUser2.addToDb();
// console.log(myDatabase)
// console.log(myDatabase[""])


const signUpBtn = document.getElementById("sign__up__btn__id");
myDatabase = {};
console.log(myDatabase);

signUpBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let username = document.getElementById("username__id").value;
    let email = document.getElementById("email__id").value;
    let password = document.getElementById("password__id").value;
    let confirmPassword = document.getElementById("confirm__password__id").value;
    let confirmPasswordLabel = document.getElementById("confirm__password__label");

    function UserAccount(username, email, password, confirmPassword) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.addToDB = function () {
            myDatabase[this.email] = {username: this.username, email: this.email, password: this.password};
        }
    }

    if (confirmPassword !== password) {
        confirmPasswordLabel.classList.add("red");
        confirmPasswordLabel.textContent = "Passwords don't match:";
    } else {
        let newUser = new UserAccount(username, email, password, confirmPassword);
        confirmPasswordLabel.classList.remove("red");
        confirmPasswordLabel.classList.add("green");
        confirmPasswordLabel.textContent = "Passwords match";
        newUser.addToDB();
        console.log(myDatabase);

    }
});








