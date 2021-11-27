import {getExistingFavs} from"./utils/favFunctions.js";

const favourite = getExistingFavs();

const productContainer = document.querySelector(".container");

if (favourite.length === 0) {
  productContainer.innerHTML =" No Favourites Added Yet";
}

favourite.forEach((favourites) => {
  productContainer.innerHTML += `<div class="product" 
  
                                  <h4>Title: ${favourites.title}</h4>
                                  <p>Price: $${favourites.price}</p>
                                  <i class="fa fa-heart"></i>
  
                                  </div>`
});