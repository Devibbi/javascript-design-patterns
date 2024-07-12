class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setMake(make) {
      this.car.make = make;
      return this;
    }
  
    setModel(model) {
      this.car.model = model;
      return this;
    }
  
    setEngine(engine) {
      this.car.engine = engine;
      return this;
    }
  
    setWheels(wheels) {
      this.car.wheels = wheels;
      return this;
    }
  
    build() {
      return this.car;
    }
  }
  
  class Car {
    constructor() {
      this.make = "";
      this.model = "";
      this.engine = "";
      this.wheels = 0;
    }
  
    displayInfo() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Engine: ${this.engine}, Wheels: ${this.wheels}`);
    }
  }
  
  // Usage
  const carBuilder = new CarBuilder();
  const car = carBuilder.setMake("Toyota").setModel("Camry").setEngine("V6").setWheels(4).build();
  car.displayInfo();