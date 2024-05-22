const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
const cartLength = JSON.parse(sessionStorage.getItem('cartLength'));
const cartNumber = document.getElementById("home__page__navbar__cart__number__id");

cartNumber.innerText = cartLength;
console.log(cartLength);
console.log("I'm working!");
console.log(cartItems);