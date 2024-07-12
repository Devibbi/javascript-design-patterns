class Employee {
    constructor(name) {
      this.name = name;
    }
  
    print() {
      console.log(`Employee: ${this.name}`);
    }
  }
  
  // Composite
  class Manager extends Employee {
    constructor(name) {
      super(name);
      this.employees = [];
    }
  
    add(employee) {
      this.employees.push(employee);
    }
  
    remove(employee) {
      const index = this.employees.indexOf(employee);
      if (index !== -1) {
        this.employees.splice(index, 1);
      }
    }
  
    print() {
      console.log(`Manager: ${this.name}`);
      for (const employee of this.employees) {
        employee.print();
      }
    }
  }
  
  // Usage
  const john = new Employee("John Doe");
  const jane = new Employee("Jane Smith");
  
  const mary = new Manager("Mary Johnson");
  mary.add(john);
  mary.add(jane);
  
  const peter = new Employee("Peter Brown");
  
  const bob = new Manager("Bob Williams");
  bob.add(peter);
  bob.add(mary);
  
  bob.print();