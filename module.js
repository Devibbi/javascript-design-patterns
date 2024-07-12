const MyModule = (function() {
    // Private members
    let privateVariable = "I am private";
  
    function privateMethod() {
      console.log("This is a private method");
    }
  
    // Public members
    return {
      publicVariable: "I am public",
  
      publicMethod() {
        console.log("This is a public method");
        // Accessing private members within the module
        console.log(privateVariable);
        privateMethod();
      }
    };
  })();
  
  // Usage
  console.log(MyModule.publicVariable); // Output: "I am public"
  MyModule.publicMethod(); 