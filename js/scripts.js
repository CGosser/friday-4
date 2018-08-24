function pizza(size, topping) {
this.size = size
this.topping = topping
}

pizza.prototype.cost = function() {
  var price = 0.0
  var priceMult = 1.0
  console.log(this.topping);
  console.log(this.size);
  if (this.topping == "pepperoni"){
    price = 10
  } else if (this.topping == "sausage") {
    price = 12
  } else if (this.topping == "pineapple") {
    price = 15
  } else if (this.topping == "mustard") {
    price = 20
  } else if (this.topping == "anchovy") {
    price = 13
  } else if (this.topping == "cheese") {
    price = 9
  }
  if (this.size == "personal"){
    priceMult = 0.8
  } else if (this.size == "small") {
    priceMult = 1.0
  } else if (this.size == "medium") {
    priceMult = 1.2
  } else if (this.size == "large") {
    priceMult = 1.4
  } else if (this.size == "xtra") {
    priceMult = 1.6
  }
 console.log(price);
 console.log(priceMult);
  return price * priceMult
}

$(document).ready(function(){
  var topping = $("#topping").val();
  var size = $("input:radio[name=size]:checked").val();
  $("#add-pizza").click(function(event){
    var pie = new pizza(size, topping)
  })
})
