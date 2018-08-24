function pizza(size, topping) {
this.size = size
this.topping = topping
}







$(document).ready(function(){
  var topping = $("#topping").val();
  var size = $("input:radio[name=size]:checked").val();
