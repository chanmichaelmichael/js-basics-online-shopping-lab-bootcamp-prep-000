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
    while(remaining > 1){
      output = output.concat(cart[index].itemName, " at $", cart[index].itemPrice, ", ")
      remaining--;
      index++;
    }
    output = output.concat("and ", cart[index].itemName, " at $", cart[index].itemPrice, ". ")
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
