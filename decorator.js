class Coffee {
    getCost() {
      return 1;
    }
  }
  
  class CoffeeDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    getCost() {
      return this.coffee.getCost() + 0.5;
    }
  }
  
  const myCoffee = new Coffee();
  const coffeeWithMilk = new CoffeeDecorator(myCoffee);
  console.log(coffeeWithMilk.getCost());