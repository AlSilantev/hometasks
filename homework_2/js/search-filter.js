import { debounce } from "./utils.js";

const searchField = document.querySelector("#search-field");
function filterProducts() {
  const searchFieldValue = searchField.value.toUpperCase();
  const productItem = document.querySelectorAll(".product__item");

  productItem.forEach(product => {
    const heading = product.querySelector(".product__title");
    const headingContent = heading.innerHTML.toUpperCase();

    if (headingContent.includes(searchFieldValue)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
}

filterProducts = debounce(filterProducts, 800);

searchField.addEventListener("keyup", filterProducts);

export { filterProducts };
