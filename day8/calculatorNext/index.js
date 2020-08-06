debugger
var operation;
var firstNumber;
var secondNumber;
var seven = "seven"
var that = this;

var buttonValue = document.getElementById(seven).value
console.log(buttonValue)



function calculate() {
    let result;
    secondNumber = document.getElementById("display").value;

    if (operation == "total") {
        result = parseInt(firstNumber) + parseInt(secondNumber);

    }
    if (operation == "minus") {
        result = firstNumber - secondNumber;
    }

    if (operation == "divide") {
        if (secondNumber == 0) {
            console.log("Cannot divide by zero")
            return
        }

        result = firstNumber / secondNumber
    }
    if (operation == "multiplier") {
        result = firstNumber * secondNumber;
    }

    document.getElementById("display").value = result;
}

function selectOperation(operation) {
    debugger
    that.operation = operation;
    console.log("selected operation = ", operation)


    firstNumber = document.getElementById("display").value;
    console.log(firstNumber)
    document.getElementById("display").value = "";
}

function entry(number) {
    tempValue = document.getElementById("display").value
    document.getElementById("display").value = tempValue + number
} 
function clean() {
    console.log("hello world")
    document.getElementById("display").value = "";
}