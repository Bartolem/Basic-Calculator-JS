let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum"); 
let result = document.getElementById("result");
let buttonCalc = document.getElementById("start");
/*TODO add button clear  
write onSubmit method */

function resetData() {
    firstNum = "";
    secondNum = "";
    result = "";
    }

function add() {
    let result = Number(firstNum.value) + Number(secondNum.value);
    
    return result;
  }

function sub() {
  let result = Number(firstNum.value) - Number(secondNum.value);
    
  return result;
  }
  
function mult() {
  let result = Number(firstNum.value) * Number(secondNum.value);
 
  return result;
  }
  
function div() {
  let result = Number(firstNum.value) / Number(secondNum.value);
    
  return result;
  }

function selectOperator() {
  let select = document.getElementById("select");
  let display = select.options[select.selectedIndex].value;
    
  return display;
  }

function calc() {
  if (selectOperator() === "+") {
    document.getElementById("result").innerHTML = add();
  }
  else if (selectOperator() === "-") {
    document.getElementById("result").innerHTML = sub();
  }
  else if (selectOperator() === "x") {
    document.getElementById("result").innerHTML = mult();
  }
  else if (selectOperator() === "/") {
    document.getElementById("result").innerHTML = div();
  }
  }
  
  function onSubmit() {

  }

  function start() {
    buttonCalc.addEventListener("click", () => calc());
    console.log(firstNum);
  }

  start();