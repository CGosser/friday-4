function pizza(size, topping) {
this.size = size
this.topping = topping
}


pizza.prototype.cost = function() {
  var price = 0.0
  var priceMult = 1.0

  if (this.topping == "pepperoni"){
    price = 10
  } else if (this.topping == "sausage") {
    price = 12
  } else if (this.topping == "pineapple") {
    price = 15
  } else if (this.topping == "pineapple with mustard") {
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
pizza.prototype.yourPizza = function() {
  return this.size + " with " + this.topping
}

$(document).ready(function(){
  var topping = ""
  var size = ""
  var piesList = []
  var totalPrice = 0
  $("#add-pizza").click(function(event){
    topping = $("#topping").val();
    size = $("input:radio[name=size]:checked").val();
    var pie = new pizza(size, topping);
    piesList.push(pie);
    console.log(pie);
    console.log(pie.size);
    console.log(pie.yourPizza());
    totalPrice += pie.cost()
    $("#price").empty()
    $("#price").text(totalPrice)
    $("#yourPies").append("<li><span class='pie'>" + pie.yourPizza() + "</span></li>");
    $(".pie").last().click(function() {
      $(".thisPizza")
    });
  })
})
