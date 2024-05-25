const cartItems = fetchCartSessionStorage();
const cartNumber = document.getElementById("home__page__navbar__cart__number__id");

cartNumber.innerText = calculateCartLength(cartItems);
console.log(cartItems);

for (const itemKey in cartItems) {
    if (cartItems.hasOwnProperty(itemKey)) {
        console.log(`Item: ${itemKey}`);
        const item = cartItems[itemKey];
        const itemKeys = Object.keys(item);

        itemKeys.forEach(key => {
            console.log(`Key: ${key}, Value: ${item[key]}`);
        });
    }
}
//
// const cartItemCard = (image, title, description) => {
//     return `
//         <div class="cart__page__product__section__product">
//             <img src="${image}">
//             <div>
//                 <h3>
//                     ${title}
//                 </h3>
//                  <p>
//                ${description}
//             </p>
//             </div>
//
//             <div class="cart__page__product__section__product__price__group">
//                 <div>Price</div>
//                 <label for="cart__page__product__section__product__qty__id">QTY</label>
//                 <input type="number" id="cart__page__product__section__product__qty__id"
//                        class="cart__page__product__section__product__qty" value="1">
//                 <div class="cart__page__product__section__product__remove__group">
//                     <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome
//                              - https://fontawesome.com License - https://fontawesome.com/license/free
//                               Copyright 2024 Fonticons, Inc.-->
//                         <path
//                                 d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3
//                                  96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2
//                                   0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9
//                                    45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
//                     </svg>
//                     <div class="cart__page__product__section__product__remove__group__text">Remove Item</div>
//                 </div>
//
//             </div>
//         </div>
//     `
// }
//
// function CartItemObject(image, productTitle, description) {
//     this.image = image;
//     this.productTitle = productTitle;
//     this.description = description;
//
//     this.getImage = function () {
//         return this.image;
//     }
//
//     this.getTitle = function () {
//         return this.productTitle;
//     }
//
//     this.getDescription = function () {
//         return this.description;
//     }
//     let setImage = (newImage) => {
//         this.image = newImage;
//     }
//
//     let setTitle = (newTitle) => {
//         this.title = newTitle;
//     }
//
//     let setDescription = (newDescription) => {
//         this.description = newDescription;
//     };
// }
//
// const cartItemsList = [];
//
//
//
// // cartItemsList.push(new CartItemObject(
// //     "../images/DrinkJarGrandpasMoonshine.webp",
// //     "GrandPa's Moonshine!",
// //     "Lorem ipsum dolor sit amet, consectetur adipisicing."
// // ));
// //
// // cartItemsList.push(new CartItemObject(
// //     "../images/DrinkJarGrandpasMoonshine.webp",
// //     "GrandPa's Moonshine!",
// //     "Lorem Lipsum dolor sit amet, consectetur adipisicing."
// // ));
//
// const cartPageContent = document.getElementById("cart__page__product__section__id");
//
// cartItemsList.forEach((cartItem) => {
//     cartPageContent.innerHTML += cartItemCard(cartItem.getImage(),
//         cartItem.getTitle(),
//         cartItem.getDescription());
// });