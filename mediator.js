class Mediator {
    constructor() {
      this.colleague1 = null;
      this.colleague2 = null;
    }
  
    setColleague1(colleague) {
      this.colleague1 = colleague;
    }
  
    setColleague2(colleague) {
      this.colleague2 = colleague;
    }
  
    notifyColleague1(message) {
      this.colleague1.receive(message);
    }
  
    notifyColleague2(message) {
      this.colleague2.receive(message);
    }
  }
  
  class Colleague {
    constructor(mediator) {
      this.mediator = mediator;
    }
  
    send(message) {
      // Send a message to the mediator
      this.mediator.notifyColleague2(message);
    }
  
    receive(message) {
      console.log(`Received message: ${message}`);
    }
  }
  
  // Usage
  const mediator = new Mediator();
  
  const colleague1 = new Colleague(mediator);
  const colleague2 = new Colleague(mediator);
  
  mediator.setColleague1(colleague1);
  mediator.setColleague2(colleague2);
  
  colleague1.send("Hello Colleague 2!"); 