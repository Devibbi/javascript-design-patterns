const carPrototype = {
    wheels: 4,
    startEngine() {
      console.log("Engine started.");
    },
    stopEngine() {
      console.log("Engine stopped.");
    }
  };
  
  // Create new car instance using the prototype
  const car1 = Object.create(carPrototype);
  car1.make = "Toyota";
  car1.model = "Camry";
  
  // Create another car instance using the same prototype
  const car2 = Object.create(carPrototype);
  car2.make = "Honda";
  car2.model = "Accord";
  
  car1.startEngine(); // Output: "Engine started."
  car2.stopEngine(); 