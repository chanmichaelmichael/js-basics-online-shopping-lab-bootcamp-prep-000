var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.random()*Math.floor(100);
 var newItem = {itemName: item, itemPrice: price}
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var output = "";
  var len = cart.length;
  if(len === 0){
    output = "Your shopping cart is empty."
  }
  else if(len === 1){
    output = "In your cart, you have ";
    output = output.concat(cart[0].itemName, " at $", cart[0].itemPrice, ".")
  }
  else{ //need to take care of oxford comma
    var remaining = len; //number of items remaining
    var index = 0;
    output = "In your cart, you have ";
    for(let i = 0; i < len - 1; i++){
    //while(remaining > 1){
      output = output.concat(cart[i].itemName, " at $", cart[i].itemPrice, ", ")
    }
    output = output.concat("and ", cart[len - 1].itemName, " at $", cart[len - 1].itemPrice, ". ")
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
