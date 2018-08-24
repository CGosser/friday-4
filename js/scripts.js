function customer(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}
customer.prototype.location = function() {
  return this.address[0] + " in the city of " + this.address[1] + ", " + this.address[2]
}

function pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}


pizza.prototype.cost = function() {
  var price = 0.0
  var priceMult = 1.0

  if (this.topping == "pepperoni"){
    price = 10
  } else if (this.topping == "sausage") {
    price = 11
  } else if (this.topping == "pineapple") {
    price = 15
  } else if (this.topping == "pineapple and mustard") {
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
    priceMult = 1.5
  } else if (this.size == "xtra") {
    priceMult = 2.0
  }
  return Math.ceil(price * priceMult)
}
pizza.prototype.yourPizza = function() {
  return this.size + " pizza, with " + this.topping
}

$(document).ready(function(){
  var topping = ""
  var size = ""
  var piesList = []
  var totalPrice = 0
  var you = {}
  $("#submitCustomer").click(function(event){
    event.preventDefault()
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    if (firstName != "" && lastName != "" && street != "" && city != "" && state != "") {
    you = new customer(firstName, lastName);
    you.address.push(street, city, state);
    $("#customerDetails").hide();
    $("#pizzaOptions").show();
  }
  })
  $("#add-pizza").click(function(event){
    event.preventDefault()
    topping = $("#topping").val();
    size = $("input:radio[name=size]:checked").val();
    var pie = new pizza(size, topping);
    piesList.push(pie);
    totalPrice += pie.cost();
    $(".price").empty();
    $(".price").text(totalPrice);
    $("#yourPies").append("<li><span class='pie'>" + pie.yourPizza() + "</span></li>");
    $(".pie").last().click(function() {
      $("#thisPizza").show();
      $(".yourTopping").text(pie.topping);
      $(".yourSize").text(pie.size);
      $(".yourPrice").text(pie.cost());
    });
  })
  $("#submit-order").click(function(event){
    console.log(piesList);
    if (piesList.length != 0) {
    $("#pizzaOptions").hide();
    $("#reciept").show()
    piesList.forEach(function(pie) {
    $("#pizzasOrdered").append("<li> a " + pie.yourPizza() + " - " + pie.cost() + " Kongbucks" + "</li>");
    })
    $("#address").text(you.location())
    $("#customerName").append(you.firstName)
    $("#orderNumber").append(Math.floor(Math.random() * 100000000000))
  }
  });
});
