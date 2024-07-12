class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers() {
      this.observers.forEach((observer) => observer.update());
    }
  }
  
  class Observer {
    update() {
      console.log("Observer is notified of changes.");
    }
  }
  
  const subject = new Subject();
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.notifyObservers(); // Output: "Observer is notified of changes." "Observer is notified of changes."