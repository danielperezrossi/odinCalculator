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
    screen.textContent = clickedButton;
    /* console.log(clickedButton); */
    newEquation(clickedButton);
})

function newEquation(input){
    if (input ==="btnCLEAR"){
        operandA = '';
        operandB = '';
        operator= '';        
        screen.textContent = operandA;                
    }
    else if(input == 'btnEQUALS'){
        screen.textContent = operate(operandA,operandB,operator);
    }
    else if(operator != ''){
        operandB += parseInt(input);
        console.log("operandB: "+operandB);
        screen.textContent = operandB;
    }
    else if (!isNaN(input)){
        operandA += parseInt(input);
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
    if(operator === '+') {
        return operandA + operandB;
    } else if(operator === '-') {
        return operandA - operandB;
    } else if(operator === '*') {
        return operandA * operandB;
    } else if(operator === '/') {
        if(operandB === 0) {
            return 'Not defined...yet';
        } else {
        return operandA / operandB;
        }
    }
    
}

function clearScreen(){
    screen.textContent = '';
}
