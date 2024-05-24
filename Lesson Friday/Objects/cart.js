const cartItems = fetchCartSessionStorage();
const cartNumber = document.getElementById("home__page__navbar__cart__number__id");

cartNumber.innerText = calculateCartLength(cartItems);
console.log(cartItems);