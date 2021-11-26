
const productContainer = document.querySelector(".container");
const search = document.querySelector(".search");

const url="https://fakestoreapi.com/products";



async function productsItem() {
  const response= await fetch(url);
  const product = await response.json();
  

  

  product.forEach(function (item) {
    productContainer.innerHTML += `<div class="product">
    
                                      <h4>Title: ${item.title}</>
                                      <p>Price: $${item.price}</p>
    
    </div>`;
});

}

productsItem();

search.onkeyup = function (event) {
  
console.log(event);

const searchValue = event.target.value.trim()
const filteredProduct = product.filter(function(item) {
  if (item.price <= (searchValue)) {
    return true;
  }
});

product = filteredProduct;


}

productsItem();
 
  
 


