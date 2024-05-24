const calculateCartLength = (cart) => {
    return Object.keys(cart).length;
}

const saveCartSessionStorage = (cartItems) => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}

const fetchCartSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem("cartItems"));
}