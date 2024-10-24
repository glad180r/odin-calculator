
// Operation Functions
const add = (first_operand, second_operand) => first_operand + second_operand;
const subtract = (first_operand, second_operand) => first_operand - second_operand;
const multiply = (first_operand, second_operand) => first_operand * second_operand;
const divide = (first_operand, second_operand) => first_operand / second_operand;



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

let operator;
let first_operand;
let second_operand;


// Helper Function to Separate Entities
const separateOperandsAndOperator = (working_string) =>{
    let first_operand;
    let second_operand;
    let final_operator;
    const operators = ["+","-","*","/"]
    operators.forEach((operator)=>{
        if(working_string.includes(operator)){
            first_operand = working_string.split(operator)[0];
            second_operand = working_string.split(operator)[1];
            final_operator = operator;
        }
    })
    return {first_operand, second_operand, operator:final_operator}
}


// Updating display
const currentDisplayInput = document.querySelector('.current-input');
const answerPreview = document.querySelector('.answer-preview');

let string_current_display_input = '';
let string_answer_preview = '';

const parseButtonPresses = () =>{
    let calculatorInputs = Array.from(document.querySelectorAll('.calc-input')); // All calculator buttons
    calculatorInputs.forEach((btn) => {
        btn.addEventListener('click', ()=>{
            if(btn.id === 'clear-btn'){ // Reset displays
                string_current_display_input = ''
            }else if(btn.id === 'del-btn'){ //Remove the last item in the string
                string_current_display_input = string_current_display_input.slice(0,-1);
                currentDisplayInput.textContent = string_current_display_input;
                answerPreview.textContent = string_answer_preview;
            }else if(btn.id === 'equals-btn'){ // compute the results
                let output = separateOperandsAndOperator(string_current_display_input);
                let result = operate(Number(output.first_operand), output.operator, Number(output.second_operand));
                console.log(result);
                currentDisplayInput.textContent = result;
                return string_current_display_input;
            }else if(btn.id === 'divide-btn'){
                string_current_display_input = string_current_display_input + "/"
            }else if(btn.id === 'multiply-btn'){
                string_current_display_input = string_current_display_input + "*"
            }else if(btn.id === 'subtract-btn'){
                string_current_display_input = string_current_display_input + "-"
            }else if(btn.id === 'addition-btn'){
                string_current_display_input = string_current_display_input + "+"
            }
            else{
                string_current_display_input = currentDisplayInput.textContent + btn.textContent;
            }
            currentDisplayInput.textContent = string_current_display_input;
            console.log(string_current_display_input);
        })
    })
}

parseButtonPresses();





