// Business Logic //

var medium = ["Medium"];
var large = ["Large"];
var beef = ["Beef"];
var veggie = ["Vegetarian"];
var pepperoni = ["Pepperoni"];

function Pizza(pSize, toppings, price) {
  this.pSize = pSize;
  this.toppings = toppings;
  this.price = 12;
}
Pizza.prototype.addToPrice = function () {
  if(medium.includes(this.pSize)) {
    this.price += 4;
  }
  if(large.includes(this.pSize)) {
    this.price += 6;
  }
  if(beef.includes(this.toppings)) {
    this.price += 2;
  }
  if(veggie.includes(this.toppings)) {
    this.price += 1;
  }
  if(pepperoni.includes(this.toppings)){
    this.price += 2;
  }
};

// User Interface //

$(document).ready(function() {
  $("#formInput").submit(function(event) {
    event.preventDefault();
    var pSize = $("#pSize").val();
    var toppings = $("#toppings").val();
    var price = 12;

    var newPizza = new Pizza(pSize, toppings, price);

    newPizza.addToPrice();

    console.log(newPizza);
    $("#list").append("<li>" + newPizza.pSize + "</li>");
    $("#list").append("<li>" + newPizza.toppings + "</li>");
    $("#list").append("<li>" + "$" + newPizza.price + "</li>");

    $("#formInput").hide();
    $("#orderConfirmation").show();









  });
});
