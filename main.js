
// Operation Functions
const add = (first_operand, second_operand) => first_operand + second_operand;
const subtract = (first_operand, second_operand) => first_operand - second_operand;
const multiply = (first_operand, second_operand) => first_operand * second_operand;
const divide = (first_operand, second_operand) => first_operand / second_operand;


// Operation Variables
let first_operand;
let operator;
let second_operand;



// Operate Function
const operate = (first_operand, operator, second_operand) => {
    let result;
    if(operator === '+'){
        result = add(first_operand, second_operand);
    }else if(operator === '-'){
        result = subtract(first_operand, second_operand);
    }else if(operator === '*'){
        result = multiply(first_operand, second_operand);
    }else if(operator === '/'){
        result = divide(first_operand, second_operand);
    }
    return result;
}





