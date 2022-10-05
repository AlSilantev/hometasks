import { maxProductAmount } from "./data.js";

const amountForm = document.querySelector('.product-amount__form');
const addToCartButton = document.querySelector('.product-amount__add-to-cart-button');
const plusButton = amountForm.querySelector('.product-amount__plus-number');
const minusButton = amountForm.querySelector('.product-amount__minus-number');
const amountField = amountForm.querySelector('.product-amount__amount-field');

let productAmount = parseInt(amountField.value);
amountField.max = maxProductAmount.g_home

plusButton.addEventListener('click', function() {
  if ( amountField.value >= amountField.min && amountField.value < maxProductAmount.g_home) {
    productAmount++;
  }
  amountField.value = productAmount;
})

minusButton.addEventListener('click', function() {
  if ( amountField.value > amountField.min && amountField.value <= maxProductAmount.g_home) {
  productAmount--;
  }
  amountField.value = productAmount;
})


// !Отправление формы без перезагрузки страницы. Закоментировал, т.к. нет сервера для проверки отправки формы
// const setUserFormSubmit = () => {
//   amountForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();

//     return fetch(
//       '######### URL ##############',
//       {
//         method: 'GET',
//         credentials: 'same-origin',
//       },
//     )
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
  
//         throw new Error(`${response.status} ${response.statusText}`);
//       })
//   })
// }

// addToCartButton.addEventListener('click', setUserFormSubmit);





