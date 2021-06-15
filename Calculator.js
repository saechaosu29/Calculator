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