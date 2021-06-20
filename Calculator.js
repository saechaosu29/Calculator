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

function operate(operand, x, y) {
    if (operand == "+") {return add(x, y);}
    if (operand == "-") {return subtract(x, y);}
    if (operand == "/") {return divide(x, y);}
    if (operand == "*") {return multiply(x, y);}

    return;
}

const displayContainer = document.querySelector("#display");
// const display = displayContainer.textContent = "Ass";

const button = document.querySelectorAll("button");
let buttonArray1 = [0];
let buttonArray2 = [];

button.forEach((button => {
    button.addEventListener("click", function(e) {
        let buttonPressed = e.target.textContent;
        let lastElement = buttonArray1.length - 1;
        
        // Disable pressing 0 if it is the only digit on the display. Remove leading 0 if another non-zero number is pressed.
        // Otherwise, keep 0 if an operator is pressed.
        if (buttonArray1[0] === 0) {
            if (buttonArray1.length == 1 && buttonPressed == 0){
                return
            }

            if (buttonPressed != "+" || buttonPressed != "-" || buttonPressed != "x" || buttonPressed != "÷"){
                buttonArray1.pop();
            }
        }

        // Only allow one consecutive operator to be pressed
        if (buttonPressed === "+" || buttonPressed === "-" || buttonPressed === "x" || buttonPressed === "÷"){
            if (buttonArray1[lastElement] === "+" || buttonArray1[lastElement] === "-" || buttonArray1[lastElement] === "x" || buttonArray1[lastElement] === "÷"){
                return;
            }
        }


        if (buttonPressed === "="){
            console.log("AAAA");
        }

        // 
        if (buttonArray1.length >= 60) {
            return;
        }

        buttonArray1.push(buttonPressed);
        console.log(buttonArray1);
        displayContainer.textContent = buttonArray1.toString().replace(/,/g,"");
    });
}))