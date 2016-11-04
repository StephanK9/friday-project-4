// Business Logic //

var mediumLarge = ["medium", "large"];
var beef = ["beef"];
var veggie = ["veggie"];
var pepperoni = ["pep"];

function Pizza(pSize, toppings, price) {
  this.pSize = pSize;
  this.toppings = toppings;
  this.price = 12;
}











// User Interface //

$(document).ready(function() {
  $("#formInput").submit(function(event) {
    event.preventDefault();
    var pSize = $("#pSize").val();
    var toppings = $("#toppings").val();
    var price = 12;

    var newPizza = new Pizza(pSize, toppings, price);

    console.log(newPizza);









  });
});
