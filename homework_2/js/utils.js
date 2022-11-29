import { maxProductAmount } from "./data.js";


// Работа с формами, добавление слушателей и максимального колтчества
export const addProductAmount = (amountField, minusButton, plusButton) => {

  let productAmount = parseInt(amountField.value);
  amountField.max = maxProductAmount.gHome;

  plusButton.addEventListener("click", function() {
    if ( amountField.value >= amountField.min && amountField.value < maxProductAmount.gHome) {
      productAmount++;
    }
    amountField.value = productAmount;
  })

  minusButton.addEventListener("click", function() {
    if ( amountField.value > amountField.min && amountField.value <= maxProductAmount.gHome) {
    productAmount--;
    }
    amountField.value = productAmount;
  })
}


// Debounce
export function debounce (func, delay) {
  let timeout;
  return function() {

    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  }
}


// Смена значка(добавление в избранное)
export function actionFavorite( actionItem ) {
  actionItem.addEventListener("click", function(){
    actionItem.classList.toggle("favorite-button--favorites-add");
  });
}




