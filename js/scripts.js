// BS
function Pizza (name, size) {
  this.customerName = name;
  this.pizzaSize = size;
  this.toppings = [];
  this.totalCost = 9;
}

Pizza.prototype.finalName = function() {
  return this.customerName
}
Pizza.prototype.finalSize = function() {
  return this.pizzaSize
}
Pizza.prototype.finalTopping = function() {
  return this.toppings
}
Pizza.prototype.finalCost = function() {
  return this.totalCost
}


function Cost(size) {
  if (newPizzaSize === "Large") {
    return cost += 6;
  } else if (newPizzaSize === "Medium") {
    return cost += 2;
  } else {
    return cost;
  }
}






// UI
$(document).ready(function() {
  $("#addMoreToppings").click(function() {
    $("#newToppings").append('<div class ="newTopping">' +
                              '<select class="form-control" id="newPizzaToppings">' +
                                '<option>Cheese</option>' +
                                '<option>Pepperoni</option>' +
                                '<option>Sausage</option>' +
                                '<option>Mushrooms</option>' +
                                '<option>Jalapenos</option>' +
                                '<option>Onions</option>' +
                                '<option>Bacon</option>' +
                              '</select>' +
                            '</div>');
  });

  $("form#newPizzaOrder").submit(function(event) {
    event.preventDefault();
    debugger;

    var inputtedCustomerName = $("input#new-customer-name").val();
    var inputtedPizzaSize = $("#newPizzaSize :selected").val();
    var newPizza = new Pizza(inputtedCustomerName, inputtedPizzaSize);

    $(".newTopping").each(function() {
      var inputtedTopping = $(this).find("#newPizzaToppings :selected").val();
      var newSingleTopping = inputtedTopping;
      newPizza.toppings.push(newSingleTopping);
    });

    $(".customers-name").append(newPizza.finalName());
    $(".pizzaSize").append(newPizza.finalSize());
    $(".pizzaToppings").append(newPizza.finalTopping() + ",  ");
    $(".finalPizzaCost").append(newPizza.finalCost());

  });

});
