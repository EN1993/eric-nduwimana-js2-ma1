
// # Task Lever 1 and 2

import {getExistingFavs} from"./utils/favFunctions.js";
const productContainer = document.querySelector(".container");
const search = document.querySelector(".search");



const favourite = getExistingFavs();

const url="https://fakestoreapi.com/products";



async function productsItem() {
  const response= await fetch(url);
  const product = await response.json();
  
  

  product.forEach(function (item) {

    let cssClass="far";

    const doesObjectExist = favourite.find(function (fav) {
      console.log(fav);
      return parseInt(fav.id) === item.id;
    });

    console.log(doesObjectExist);

    if (doesObjectExist) {
      cssClass="fa";
    }



    

    productContainer.innerHTML += `<div class="product">
    
                                      <h4>Title: ${item.title}</>
                                      <p>Price: $${item.price}</p>
                                      <i class="${cssClass} fa-heart" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}"></i>
    
    </div>`;
});

const favButtons = document.querySelectorAll(".product i");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    
    const currentFavs = getExistingFavs();

    const itemExists= currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (itemExists === undefined) {
      const item = { id: id, title: title, price: price };
      currentFavs.push(item);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id != id);
      saveFavs(newFavs);
    }

    

 }

 

 function saveFavs(favs) {
   localStorage.setItem("favourite", JSON.stringify(favs));
 }

}

productsItem();








 
  
 


