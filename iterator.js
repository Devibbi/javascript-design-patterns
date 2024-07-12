class Collection {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    createIterator() {}
  }
  
  // Concrete Aggregate
  class ConcreteCollection extends Collection {
    createIterator() {
      return new ConcreteIterator(this);
    }
  }
  
  // Iterator
  class Iterator {
    constructor(collection) {
      this.collection = collection;
      this.index = 0;
    }
  
    hasNext() {}
  
    next() {}
  }
  
  // Concrete Iterator
  class ConcreteIterator extends Iterator {
    hasNext() {
      return this.index < this.collection.items.length;
    }
  
    next() {
      return this.collection.items[this.index++];
    }
  }
  
  // Usage
  const collection = new ConcreteCollection();
  collection.addItem("Item 1");
  collection.addItem("Item 2");
  collection.addItem("Item 3");
  
  const iterator = collection.createIterator();
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }