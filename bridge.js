class Shape {
    constructor(color) {
      this.color = color;
    }
  
    draw() {}
  }
  
  // Concrete Abstractions
  class Circle extends Shape {
    draw() {
      console.log(`Drawing a ${this.color} circle`);
    }
  }
  
  class Square extends Shape {
    draw() {
      console.log(`Drawing a ${this.color} square`);
    }
  }
  
  // Implementor
  class Color {
    getColor() {}
  }
  
  // Concrete Implementors
  class RedColor extends Color {
    getColor() {
      return "red";
    }
  }
  
  class BlueColor extends Color {
    getColor() {
      return "blue";
    }
  }
  
  // Usage
  const redCircle = new Circle(new RedColor());
  redCircle.draw(); // Output: "Drawing a red circle"
  
  const blueSquare = new Square(new BlueColor());
  blueSquare.draw();