$(document).ready(function () {
  function Pizza(type, size, topping, crust) {
    this.type = type;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
  }

  var totalCost = 0;
  var newOrder = [];
  var customerName = "";
  var customerMobile = "";

  Pizza.prototype.getPizzaPrice = function () {
    return this.getCrustPrice() + this.getToppingPrice() + this.getTypePrice();
  };
  Pizza.prototype.getToppingPrice = function () {
    if (this.size === "large") {
      if (this.topping === "tomato") {
        return 80;
      } else if (this.topping === "onions") {
        return 70;
      } else if (this.topping === "mushroom") {
        return 60;
      } else {
        return 100;
      }
    } else if (this.size === "medium") {
      if (this.topping === "tomato") {
        return 60;
      } else if (this.topping === "onions") {
        return 50;
      } else if (this.topping === "mushroom") {
        return 40;
      } else {
        return 30;
      }
    } else {
      if (this.topping === "tomato") {
        return 50;
      } else if (this.topping === "onions") {
        return 45;
      } else if (this.topping === "mushroom") {
        return 40;
      } else {
        return 20;
      }
    }
  };
  Pizza.prototype.getTypePrice = function () {
    if (this.size === "large") {
      if (this.type === "chicken mushroom") {
        return 1500;
      } else if (this.type === "hawaiian") {
        return 1300;
      } else if (this.type === "regina") {
        return 1200;
      } else {
        return 1000;
      }
    } else if (this.size === "medium") {
      if (this.type === "chicken mushroom") {
        return 1400;
      } else if (this.type === "hawaiian") {
        return 1200;
      } else if (this.type === "regina") {
        return 1100;
      } else {
        return 900;
      }
    } else {
      if (this.type === "chicken mushroom") {
        return 1300;
      } else if (this.type === "hawaiian") {
        return 1100;
      } else if (this.type === "regina") {
        return 1000;
      } else {
        return 800;
      }
    }
  };
  Pizza.prototype.getCrustPrice = function () {
    if (this.crust === "thick") {
      return 100;
    } else {
      return 0;
    }
  };
  Pizza.prototype.myPizzaPrice = function () {
    return this.myCrustPrice() + this.myTypePrice() + this.myToppingsPrice();
  };
  $("#order-form").submit(function (e) {
    e.preventDefault();
    var userType = $("#type").val();
    var userCrust = $("#crust").val();
    var userSize = $("#size").val();
    var userToppings = $("#toppings").val();
    var quantity = parseInt($("#number-of-pizzas").val());
    var newPizza = new Pizza(userType, userSize, userToppings, userCrust);
    for (let i = 1; i <= quantity; i++) {
      newOrder.push(newPizza);
      totalCost += newPizza.getPizzaPrice();
      $("#list").append(
        "<tr>" +
        "<td>" +
        newPizza.type +
        "</td>" +
        "<td>" +
        newPizza.size +
        "</td>" +
        "<td>" +
        newPizza.topping +
        "</td>" +
        "<td>" +
        newPizza.crust +
        "</td>" +
        "<td>" +
        newPizza.getPizzaPrice() +
        "</td>" +
        "</tr>"
      );
    }

    console.log(newOrder);

    console.log(totalCost);
    $("#type").val("");
    $("#crust").val("");
    $("#size").val("");
    $("#toppings").val("");
    $("#number-of-pizzas").val("");
    console.log();
  });

  $("#checkout").click(function () {
    if (newOrder.length > 0) {
      $(".orders").hide();
      $(".order-summary").show();
    }
  });

  $("#checkout-options").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var mobileNumber = $("#phone-number").val();
    customerMobile = mobileNumber;
    customerName = name;
    var deliverOption = $("#delivery-option").val();
    if (deliverOption === "deliver") {
      $(".location").fadeIn();
      $("#checkout-options").hide();
    } else {
      alert(
        "Your total bill is " +
        totalCost +
        ". Your order will be ready for collection in the next 1 hour"
      );
      window.location.reload();
    }
  });

  $("#location-form").submit(function (e) {
    e.preventDefault();
    var homeAddress = $("#address").val();
    var houseNumber = $("#house-no").val();
    totalCost += 200;
    alert(
      "Your total Bill is " +
      totalCost +
      ". Your order will be delivered to the address (" +
      homeAddress +
      ", " +
      houseNumber +
      ") in the next 2 hours"
    );
    window.location.reload();
  });
})
