class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class CarFactory {
  createCar(make, model) {
    return new Car(make, model);
  }
}

const factory = new CarFactory();
const myCar = factory.createCar("Tope", "Model 1");