function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,b){
    let result = add(a,b);
    return "El resultado es " + result;
}
////////////////////////////////////////////
const link = document.getElementById('result');

////////////////////////////////////////////
const wrapper = document.getElementById('calculatorButtons');
wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }  
    let clickedButton = event.target.id;
    console.log(clickedButton);
    link.textContent = clickedButton;
  })