class Receiver {
    execute() {
      console.log("Receiver executes the command.");
    }
  }
  
  class Command {
    constructor(receiver) {
      this.receiver = receiver;
    }
  
    execute() {
      this.receiver.execute();
    }
  }
  
  class Invoker {
    setCommand(command) {
      this.command = command;
    }
  
    executeCommand() {
      this.command.execute();
    }
  }
  
  const receiver = new Receiver();
  const command = new Command(receiver);
  const invoker = new Invoker();
  
  invoker.setCommand(command);
  invoker.executeCommand(); 