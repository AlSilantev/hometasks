import { actionFavorite } from "./utils.js";
import { getDataProductList } from "./api.js";

if (window.location.pathname.indexOf('index') >= 0) {

  const productItemTemplate = document.querySelector('#product').content;
  const productList = document.querySelector('.products');

  const renderProductsList = (products) => {
    const createProduct = document.createDocumentFragment();
    
    products.forEach((product) => {
  
      const productItem = productItemTemplate.cloneNode(true);
      const productItemInfo = productItem.querySelector('.product__item');
      const productItemLink = productItem.querySelector('.product__description-link');
      const productItemImage = productItem.querySelector('img');
      const productItemTitle = productItem.querySelector('.product__title');
      const favoriteButton = productItem.querySelector('.favorite-button');
      const productItemPrice = productItem.querySelector('.product__price');

      productItemInfo.id = product.id;
      productItemLink.href = 'product.html?:' + product.id;
      productItemImage.src = product.picture.path;
      productItemImage.alt = product.picture.alt;
      productItemTitle.textContent = product.name;
      productItemPrice.textContent = product.price.value;
      if(product.price.currency = 'USD') {
        productItemPrice.textContent ='$' + product.price.value;
      }
      actionFavorite(favoriteButton);
     
      createProduct.appendChild(productItem);
    })
    
    productList.appendChild(createProduct);
  }

  getDataProductList((products) => {
    renderProductsList(products);
  });

  
}
