log = (x) => {
    console.log('log : ', x)
}



// var fn = (...args) => {
//     console.log(args);
// }
// // Spread operator

// var o = {
//     a: 1,
//     b: 2,
// }

// var arr = [1, 2, 3, 5]

// var d = {
//     ...o,
//     c: 3,
//     x: arr,
// }


// console.log(d)




// var log = (logfn) => {
//     console.log('log: ', logfn());
// }

// var x = () => {
//     return 'acet';
// }
// log(x)


// Immediately Invoked Function Expression

//IIFE


// var fn = () => {console.log('Hello World');}

// (() => {console.log('IIFE')})();



// Module Pattern

// var getUserData = async () => {
//     const user = await fetch('https://swapi.dev/api/people/1/')
//     return user;
// }
// (async() => { const user = await getUserData(); console.log(user)}) ();

var singleton = () => {
    var priveateVariable = 10;

    var priveateFunction = () => {
        return 5;
    };
    return {
        publicValue: 20,
        functionResult: priveateFunction() + priveateVariable,
    }
}
singleton()