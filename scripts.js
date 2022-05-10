function resetData(){
    document.getElementById("firstNum").
    value = "";
    document.getElementById("secondNum").
    value = "";
    document.getElementById("result").
    innerHTML = "";
    }
  function add(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    let result = num1 + num2;
    return result;
  }
  function sub(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    let result = num1 - num2;
    return result;
  }
  function mult(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    let result = num1 * num2;
    return result;
  }
  function div(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    let result = num1 / num2;
    return result;
  }
  function selectOperator(){
    let select = document.getElementById("select");
    let display = select.options[select.selectedIndex].value;
    return display;
  }
  function calc(){
    if(selectOperator() === "+"){
      document.getElementById("result").
    innerHTML = add();
    }
    else if(selectOperator() === "-"){
      document.getElementById("result").
      innerHTML = sub();
    }
    else if(selectOperator() === "x"){
      document.getElementById("result").
      innerHTML = mult();
    }
    else if(selectOperator() === "/"){
      document.getElementById("result").
      innerHTML = div();
    }
  }