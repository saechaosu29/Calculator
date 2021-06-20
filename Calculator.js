function add(x, y) {
    return x + y;

}

function subtract(x, y) {
    return x - y;

}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    if (operator == "+") {return add(x, y);}
    if (operator == "-") {return subtract(x, y);}
    if (operator == "÷") {return divide(x, y);}
    if (operator == "x") {return multiply(x, y);}

    return;
}

const displayContainer = document.querySelector("#display");
// const display = displayContainer.textContent = "Ass";

const button = document.querySelectorAll("button");
let buttonArray = [];
let operand = "";
let answer = 0;
let operator = "";


button.forEach((button => {
    button.addEventListener("click", function(e) {
        let buttonPressed = e.target.textContent;

        // If an operator is not pressed, continue ccepting
        if (buttonPressed != "+" && buttonPressed != "-" && buttonPressed != "x" && buttonPressed != "÷" && buttonPressed != "="){
            operand += buttonPressed;
       
        } else {
            buttonArray.push(operand);       // store operand
            buttonArray.push(buttonPressed); // store operator
            operand = "";                    // clear operand          
        }
        displayContainer.textContent = operand;

        if (buttonPressed === "=") {
            buttonArray.push(operand);
            answer = operate(buttonArray[1], parseInt(buttonArray[0]), parseInt(buttonArray[2]));
            buttonArray = [];
            operand = answer;
            displayContainer.textContent = answer;
        }

        // Clear Display
        if (buttonPressed == "C") {
            buttonArray = [];
            operand = "";
            displayContainer.textContent = "";
        }



        
    });
}))
