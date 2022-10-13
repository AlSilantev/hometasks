import { getDataProductCard } from "./api.js";
import { addProductAmount, actionFavorite } from "./utils.js";
 
if (window.location.pathname.indexOf('product') >= 0) {
  const productCardMain = document.querySelector('.product-card-main');
  const productCardInfoTemplate = document.querySelector('#product-card-info').content;

  const renderProductCard = (product) => {
    const createProductCard = document.createDocumentFragment();

    const productCard = productCardInfoTemplate.cloneNode(true);
    
    const plusButton = productCard.querySelector('.product-amount__plus-number');
    const minusButton = productCard.querySelector('.product-amount__minus-number');
    const amountField = productCard.querySelector('.product-amount__amount-field');

    productCard.querySelector('.product-card').id = product.id;
    productCard.querySelector('.product-card__title ').textContent = product.name;
    productCard.querySelector('.product-card__product-description').textContent = product.info;
    productCard.querySelector('.product-card__title--details-title').textContent = product.description;
    productCard.querySelector('.product-card__product-description--details').textContent = product.details;
    productCard.querySelector('.product-card__price').textContent = product.price.value;
    if(product.price.currency = 'USD') {
      productCard.querySelector('.product-card__price').textContent ='$' + product.price.value;
    } 

    addProductAmount(amountField, minusButton, plusButton);
    productCard.querySelector

    actionFavorite(productCard.querySelector('.favorite-button'))


    createProductCard.appendChild(productCard);
    
    productCardMain.appendChild(createProductCard);
  }

  getDataProductCard((product) => {
    renderProductCard(product);
  })
}

