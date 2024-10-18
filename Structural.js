// Base class Coffee
class Coffee {
    cost() {
        return 5;  // Base cost of coffee
    }
}

// MilkDecorator class
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;  // Reference to the base coffee object
    }

    cost() {
        return this.coffee.cost() + 1;  // Add the cost of milk to the coffee
    }
}

// Creating a coffee instance
let coffee = new Coffee();

// Adding milk using the decorator
coffee = new MilkDecorator(coffee);

// Output the total cost
console.log(coffee.cost()); // Output: 6