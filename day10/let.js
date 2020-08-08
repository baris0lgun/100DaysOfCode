// {
//     let x = 2;
// }
// // x can Not be used here

// //Redeclaring a variable using the var keyword can impose problems.

// //Redeclaring a variable inside a block will also redeclare the variable outside the block:





// var x = 10;
// // here x is 10

// {
    // var x = 2;
    // // here x is 2
// }

// //here x is 2




// var x = 10;

// {
//     let x = 2;
// }

// //here x is 10





// var i = 5;
// for (var i = 0; i < 10; i++) {

//}
  

// //Here i is 10





//   let i = 5;
// for (let i = 0; i < 10; i++) {

// }

// //here i is 5





// //Variables declared with var and let are quite similar when declared inside a function.
// //They will both have Function Scope:

// function myFunction() {
//     var carName = "Volvo";   // Function Scope
//   }
  
  
// function myFunction() {
//     let carName = "Volvo";   // Function Scope
//   }






// //Variables declared with var and let are quite similar when declared outside a block.

// //They will both have Global Scope:

// var x = 2; //Global scope

// let x = 2; //Global scope





// //In HTML, the global scope is the window object.

// //Global variables defined with the var keyword belong to the window object:

// var carName = "Volvo";
// //code here can use window.carName





// //Global variables defined with the let keyword do not belong to the window object:

// let carName = "Volvo";
// // code here cannot use window.carName




// //Redeclaring a JavaScript variable with var is allowed anywhere in a program:

// var x = 2;

// // x is 2
 
// var x = 3;

// // x is 3




// //Redeclaring a variable with let, in another scope, or in another block, is allowed:

// let x = 2; //allowed

// {
//     let x = 3; // allowed
// }

// {
//     let x = 4; // allowed
// }




// // Redeclaring a variable with let, in another scope, or in another block, is allowed:

// let x = 2;       // Allowed

// {
//   let x = 3;   // Allowed
// }

// {
//   let x = 4;   // Allowed
// }




// // HOISTING


// carName = "Volvo";
// alert(Volvo);
// var carName;



// //Variables defined with let are hoisted to the top of the block, but not initialized.

// //Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// // Using a let variable before it is declared will result in a ReferenceError.

// //The variable is in a "temporal dead zone" from the start of the block until it is declared:

// //This will result in a ReferenceError:

// carName = "Volvo";
// alert(carname)
// let carName;