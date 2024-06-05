function ProductObject(image, title, description, price) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;

    this.getImage = function () {
        return this.image;
    }

    this.getTitle = function () {
        return this.title;
    }

    this.getDescription = function () {
        return this.description;
    }

    this.getPrice = function () {
        return this.price;
    }

    let setImage = (newImage) => {
        this.image = newImage;
    };

    let setTitle = (newTitle) => {
        this.title = newTitle;
    };

    let setDescription = (newDescription) => {
        this.description = newDescription;
    };

    let setPrice = (newPrice) => {
        this.price = newPrice;
    };

}

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
        cartItemsList.push(new ProductObject(value.productImage,
            value.productName,
            value.productDescription,
            value.productPrice));
    })
}


