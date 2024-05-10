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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-dash"
                             viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg>
                        <div class="home__page__item__content__details__price__group__buttons__amount">0</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-plus"
                             viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
     `
}

function ProductObject(image, title, description, price) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;

    this.getImage = function() {
        return this.image;
    }

    this.getTitle = function() {
        return this.title;
    }

    this.getDescription = function() {
        return this.description;
    }

    this.getPrice = function() {
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
    (10 * 50_000)
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


addEventListener("load", (event) => {
    const homePageContent = document.getElementById("home__page__product__listing");

    productsList.forEach((product) => {
        homePageContent.innerHTML += generateCard(product.getImage(), product.getTitle(), product.getDescription(), product.getPrice(), product.getPrice());
    })
})
