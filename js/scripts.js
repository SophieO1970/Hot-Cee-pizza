$(document).ready(function () {
    function Pizza(type, size, topping, crust) {
        this.type = type;
        this.size = size;
        this.topping = topping;
        this.crust = crust;
    }
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
    }
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
            } else if (this.type === "haiwaiian") {
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
    }

});
