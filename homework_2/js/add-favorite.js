const favoriteButton = document.querySelectorAll('.favorite-button');

for (let i = 0; i < favoriteButton.length; i++) {
  favoriteButton[i].addEventListener("click", function(){
    favoriteButton[i].classList.toggle('favorite-button--favorites-add')
  });
}
