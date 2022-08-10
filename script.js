let operandA = '';
let operandB = '';
let operator = '';
let resetScreen = false;

const screen = document.getElementById('result');
screen.addEventListener("DOMCharacterDataModified", (e) => {
    let input = screen.textContent;
    console.log("The input is:" ,input);
    console.log("I AM ALIVE");
})

////////////////////////////////////////////
const wrapper = document.getElementById('calculatorButtons');
wrapper.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton){
      return;
    }   
    let clickedButton = e.target.id;
    /* screen.textContent = clickedButton; */
    /* console.log(clickedButton); */
    newEquation(clickedButton);
})

function newEquation(input){
    if (input ==="btnCLEAR"){ 
        clearScreen();       
    }
    else if(input == 'btnEQUALS'){
        screen.textContent = operate(operandA,operandB,operator);
        console.log("The result is: " + operate(operandA,operandB,operator));
        let result = operate(operandA,operandB,operator);
        clearScreen();
        operandA = result;
        screen.textContent = operandA;
    }
    else if(operator != ''){
        operandB += Number(input);
        console.log("operandB: "+operandB);
        screen.textContent = operandB;
    }
    else if (!isNaN(input)){
        operandA += Number(input);
        console.log("operandA: "+operandA);
        screen.textContent = operandA;
    }
    else if(input == 'btn*'){
        operator = '*'
        console.log("operator is: "+operator);
    }
    else if(input == 'btn-'){
        operator = '-'
        console.log("operator is: "+operator);
    }
    else if(input == 'btn+'){
        operator = '+'
        console.log("operator is: "+operator);
    }
    else if(input == 'btn/'){
        operator = '/'
        console.log("operator is: "+operator);
    }
}

////////////////////////////////////////////
function operate(operandA, operandB, operator) {
    operandA = parseInt(operandA);
    operandB = parseInt(operandB);
    let result = 0;
    if(operator === '+') {
        result = operandA + operandB;
    } else if(operator === '-') {
        result = operandA - operandB;
    } else if(operator === '*') {
        result = operandA * operandB;
    } else if(operator === '/') {
        if(operandB === 0) {
            result = 'Not defined...yet';
        } else {
            result = operandA / operandB;
        }
    }
    console.log(result);
    if (result % 2 === 0){
        return result;
    }
    else{
        return result.toFixed(3);
    }

}

function clearScreen(){
    operandA = '';
    console.log(operandA);
    operandB = '';
    console.log(operandB);
    operator= ''; 
    console.log(operator);
    screen.textContent = ' ';
    console.log("Screen CLEARED");
}


/* 
calculator pseudo algorithm

screen content void
capture first number 
capture operator
capture second number
screen content result
 */