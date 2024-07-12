class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    executeStrategy() {
      this.strategy.execute();
    }
  }
  
  class ConcreteStrategyA {
    execute() {
      console.log("Strategy A is executed.");
    }
  }
  
  class ConcreteStrategyB {
    execute() {
      console.log("Strategy B is executed.");
    }
  }
  
  const contextA = new Context(new ConcreteStrategyA());
  contextA.executeStrategy(); // Output: "Strategy A is executed."
  
  const contextB = new Context(new ConcreteStrategyB());
  contextB.executeStrategy(); // Output: "Strategy B is executed."