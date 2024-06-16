const cartItems = fetchCartSessionStorage();
const cartNumber = document.getElementById("home__page__navbar__cart__number__id");

cartNumber.innerText = calculateCartLength(cartItems);

const cartItemCard = (image, title, description, price) => {
    return `
        <div class="cart__page__product__section__product">
            <img src="${image}">
            <div>
                <h3 class="cart__page__product__section__product__title">
                    ${title}
                </h3>
                 <p>
                    ${description}
                </p>
            </div>
            <div class="cart__page__product__section__product__price__group">
                <div class="cart__page__product__section__product__price__group__price">R${price}</div>
                <div class="cart__page__product__section__product__price__group__qty_section">
                    <label for="cart__page__product__section__product__qty__id">QTY</label>
                    <input type="number" id="cart__page__product__section__product__qty__id"
                       class="cart__page__product__section__product__qty" value="1"
                    >
                </div>
                <div id="cart__page__product__section__product__remove__group__id" class="cart__page__product__section__product__remove__group">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome
                             - https://fontawesome.com License - https://fontawesome.com/license/free
                              Copyright 2024 Fonticons, Inc.-->
                        <path
                                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3
                                 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2
                                  0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9
                                   45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                    <div class="cart__page__product__section__product__remove__group__text">Remove Item</div>
                </div>

            </div>
        </div>
    `
}

const cartItemsList = [];

createCartObject(cartItems);

const cartPageContent = document.getElementById("cart__page__product__section__id");

cartItemsList.forEach((item) => {
    cartPageContent.innerHTML += cartItemCard(item.getImage(),
        item.getTitle(),
        item.getDescription(),
        item.getPrice());
});

cartPageContent.addEventListener("click", (event) => {
    if (event.target && event.target.closest(".cart__page__product__section__product__remove__group")) {
        const productElement = event.target.closest(".cart__page__product__section__product");
        const titleElement = productElement.querySelector(".cart__page__product__section__product__title");
        const title = titleElement.textContent.trim();

        const index = cartItemsList.findIndex(item => item.getTitle() === title)
        console.log(title)

        if (index !== -1) {
            cartItemsList.splice(index, 1);
            cartNumber.innerText = cartItemsList.length;
            productElement.remove();
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".cart__page__product__section__product");
    let total = 0;

    cartItems.forEach((item) => {
        const priceElement = item.querySelector(".cart__page__product__section__product__price__group__price");
        const qtyElement = item.querySelector(".cart__page__product__section__product__qty");

        const cartItem = {
            price: parseFloat(priceElement.innerText.replace("R", "")),
            quantity: parseInt(qtyElement.value)
        };

        qtyElement.addEventListener("change", (event) => {
            cartItem.quantity = parseInt(event.target.value);
            item.dataset.cartItem = JSON.stringify(cartItem);
            updateTotal();
        });

        item.dataset.cartItem = JSON.stringify(cartItem);
    });

    const updateTotal = () => {
        total = 0;
        cartItems.forEach((item) => {
            const cartItem = JSON.parse(item.dataset.cartItem);
            total += cartItem.price * cartItem.quantity;
        });

        const totalFormatted = total.toFixed(2);
        const checkoutTotalPrice = document.getElementById("cart__page__section__checkout__total__group__price__id");

        if (checkoutTotalPrice) {
            checkoutTotalPrice.innerHTML = `Total R: ${totalFormatted}`;
        } else {
            console.log(`No element id matches "cart__page__section__checkout__total__group__price__id"`);
        }
    };

    updateTotal(); // Initial total calculation
});


// const cartCards = document.querySelectorAll(".cart__page__product__section__product__qty");
// const cartItemPrice = document.querySelectorAll(".cart__page__product__section__product__price__group__price");
//
//
// cartCards.forEach((card) => {
//     card.addEventListener("change", (event) => {
//         console.log(card.value);
//     })
// })









