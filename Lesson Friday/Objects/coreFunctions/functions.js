const calculateCartLength = (cart) => {
    return Object.keys(cart).length;
}

const saveCartSessionStorage = (cartItems) => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}

const fetchCartSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem("cartItems"));
}

const createCartObject = (items) => {
    Object.entries(items).forEach(([key, value]) => {
        cartItemsList.push(new CartItemObject(value.productImage,
            value.productName,
            value.productDescription,
            value.productPrice));
    })
}


