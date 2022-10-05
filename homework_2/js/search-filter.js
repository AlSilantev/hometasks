import { debounce } from "./utils.js";

const searchField = document.querySelector('#search-field')
function filterProducts() {

  const searchFieldValue = searchField.value.toUpperCase();
  const productItem = document.querySelectorAll('.product__item');

  productItem.forEach(
    function getMatch (info) {
      const heading = info.querySelector('.product__title')
      const headingContent = heading.innerHTML.toUpperCase();
      

      if (headingContent.includes(searchFieldValue)) {
        info.style.display = "";
      } else {
        info.style.display = "none"
      }
    }
  )
}

filterProducts = debounce(filterProducts, 800);

searchField.addEventListener('keyup', filterProducts)

export { filterProducts };