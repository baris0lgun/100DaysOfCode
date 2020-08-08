// //Variables defined with const behave like let variables, except they cannot be reassigned:

// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error




// //Declaring a variable with const is similar to let when it comes to Block Scope.

// //The x declared in the block, in this example, is not the same as the x declared outside the block:

// var x = 10;
// //here x is 10

// {
//     const x = 2;
//     //here x is 2
// }

// // here x is 10





// // JavaScript const variables must be assigned a value when they are declared:

// const PI;
// PI = 3.14159265359; // incorrect

// const PI = 3.14159265359; //correct




// // The keyword const is a little misleading.

// // It does NOT define a constant value. It defines a constant reference to a value.

// // Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.

// // If we assign a primitive value to a constant, we cannot change the primitive value: 

// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error




// // You can change the properties of a constant object:

// const car = {type:"Fiat", model:"500", color:"white"};

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";




// // But you can NOT reassign a constant object:

// // You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");




// // But you can NOT reassign a constant array:

// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR




// //Redeclaring a JavaScript var variable is allowed anywhere in a program:

// var x = 2;    //  Allowed
// var x = 3;    //  Allowed
// x = 4;        //  Allowed




// // Redeclaring or reassigning an existing const variable, in the same scope, or in the same block, is not allowed:

// const x = 2;       // Allowed
// const x = 3;       // Not allowed
// x = 3;             // Not allowed
// var x = 3;         // Not allowed
// let x = 3;         // Not allowed

// {
//   const x = 2;   // Allowed
//   const x = 3;   // Not allowed
//   x = 3;         // Not allowed
//   var x = 3;     // Not allowed
//   let x = 3;     // Not allowed
// }




// // Redeclaring a variable with const, in another scope, or in another block, is allowed:

// const x = 2;       // Allowed 'global'

// {
//   const x = 3;   // Allowed 'block'
// }

// {
//   const x = 4;   // Allowed 'block'
// }

