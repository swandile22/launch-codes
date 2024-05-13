// const element = document.getElementById('myTestingData');
// const userDB = JSON.parse(sessionStorage.getItem('myWebUsers'));
// const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

/**
 * The function below will generate a card that takes in parameters provided for the card's content

 * @image [string]  Is a variable that accepts an image link as the source for the image tage
 * @title [string]  Accepts a string for the h3 element which will contain the product name
 * @description [string] accepts a string for the paragraph tag which will contain the product description
 * @price [number]  accepts a number for the price element
 * */

const generateCard = (image, title, description, price) => {
    return `
    <div class="home__page__item">
        <div class="home__page__item__content">
            <img src="${image}" alt="Black T-shirt">
            <div class="home__page__item__content__details">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="home__page__item__content__details__price__group">
                    <div class="home__page__item__content__details__price__group__price">$ ${price}</div>
                    <div class="home__page__item__content__details__price__group__buttons">
                      <button data-product-type="${title}" id="home__page__item__content__details__price__group__buttons__btn" class="home__page__item__content__details__price__group__buttons__btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     `
}

/**
 * This creates a constructor for the ProductObject which assigns values to the parameters provided
 * And then creates getters and setters to access the data in the object constructor

 * @image [string]  Is a variable that accepts an image link as the source for the image tage
 * @title [string]  Accepts a string for the h3 element which will contain the product name
 * @description [string] accepts a string for the paragraph tag which will contain the product description
 * @price [number]  accepts a number for the price element
 * */

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

const productsList = [];

productsList.push(new ProductObject(
    "images/DrinkJarGrandpasMoonshine.webp",
    "GrandPa's Moonshine!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    (10 * 50)
));

productsList.push(new ProductObject(
    "images/mariabeatrice-alonzi-VyI0GBHSsJ8-unsplash.jpg",
    "Mike Sneaker",
    "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    45
));

productsList.push(new ProductObject(
    "images/mariabeatrice-alonzi-VyI0GBHSsJ8-unsplash.jpg",
    "Madidas dress",
    "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    100
));

productsList.push(new ProductObject(
    "images/mariabeatrice-alonzi-VyI0GBHSsJ8-unsplash.jpg",
    "Life",
    "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    89
));

productsList.push(new ProductObject(
    "images/mariabeatrice-alonzi-VyI0GBHSsJ8-unsplash.jpg",
    "Lorem ipsum",
    "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    12
));

/**
 * The code below has a callback function that is triggered after the load event, which detects when a page
 * has been loaded.
 * For each of the items inside the productList array, the function takes in the product and gets the specific data
 * and displays it on the inner HTML of the content card.
 * @product [string]  is a parameter for each item inside the productList array.
 * */

addEventListener("load", (event) => {
    const homePageContent = document.getElementById("home__page__product__listing");

    productsList.forEach((product) => {
        homePageContent.innerHTML += generateCard(product.getImage(),
            product.getTitle(),
            product.getDescription(),
            product.getPrice(),
            product.getPrice()
        );
    });


    let testBtns = document.querySelectorAll(".home__page__item__content__details__price__group__buttons__btn");
    const cart = [];

    for (let i = 0; i < testBtns.length; i++) {
        let testBtn = testBtns[i];

        testBtn.addEventListener("click", (event) => {
            let cartNumber = document.getElementById("home__page__navbar__cart__number__id").innerText;

            console.log(testBtn.dataset.productType);
            cart.push(testBtn.dataset.productType);
            console.log(cart);
            console.log(cart.length);



        })
    }

})






