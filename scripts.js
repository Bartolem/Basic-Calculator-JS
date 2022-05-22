let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum"); 
let result = document.getElementById("result");
let buttonCalc = document.getElementById("buttonCalc");
let clear = document.getElementById("clear");
let select = document.getElementById("select");

function resetData() {
    firstNum.value = "";
    secondNum.value = "";
    result.innerHTML = "";
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
    if (firstNum.value === "") {
      alert("You need to pass number 1!");
    }
    else if (secondNum.value === "") {
      alert("You need to pass number 2!");
    }
    else {
      calc();
    }
  }

  function start() {
    buttonCalc.addEventListener("click", () => onSubmit());
    clear.addEventListener("click", () => resetData());
    select.addEventListener("click", () => selectOperator());
  }

  start();