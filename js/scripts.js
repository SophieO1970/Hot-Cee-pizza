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
            if (this.topping === "Tomato") {
                return 80;
            } else if (this.topping === "Onions") {
                return 70;
            } else if (this.topping === "Mushroom") {
                return 60;
            } else {
                return 100;
            }
        } else if (this.size === "medium") {
            if (this.topping === "Tomato") {
                return 60;
            } else if (this.topping === "Onions") {
                return 50;
            } else if (this.topping === "Mushroom") {
                return 40;
            } else {
                return 30;
            }
        } else {
            if (this.topping === "Tomato") {
                return 50;
            } else if (this.topping === "Onions") {
                return 45;
            } else if (this.topping === "Mushroom") {
                return 40;
            } else {
                return 20;
            }
        }
    }
    Pizza.prototype.getTypePrice = function () {
        if (this.size === "large") {
            if (this.type === "Chicken Mushroom") {
                return 1500;
            } else if (this.type === "Hawaiian") {
                return 1300;
            } else if (this.type === "Regina") {
                return 1200;
            } else {
                return 1000;
            }
        } else if (this.size === "medium") {
            if (this.type === "Chicken Mushroom") {
                return 1400;
            } else if (this.type === "haiwaiian") {
                return 1200;
            } else if (this.type === "Regina") {
                return 1100;
            } else {
                return 900;
            }
        } else {
            if (this.type === "Chicken Mushroom") {
                return 1300;
            } else if (this.type === "Hawaiian") {
                return 1100;
            } else if (this.type === "Regina") {
                return 1000;
            } else {
                return 800;
            }
        }
    }
    Pizza.prototype.getCrustPrice = function () {
        if (this.crust === "thick") {
            return 100;
        } else {
            return 50
        }
    }



});
