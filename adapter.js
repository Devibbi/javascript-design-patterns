class LegacyPrinter {
    printLegacy(text) {
      console.log(`Legacy Printing: ${text}`);
    }
  }
  
  // Target interface
  class Printer {
    print(text) {}
  }
  
  // Adapter
  class PrinterAdapter extends Printer {
    constructor() {
      super();
      this.legacyPrinter = new LegacyPrinter();
    }
  
    print(text) {
      this.legacyPrinter.printLegacy(text);
    }
  }
  
  // Usage
  const printer = new PrinterAdapter();
  printer.print("Hello, World!");