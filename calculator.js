alert("Hi!");

let numVar = document.getElementsByClassName("number");
let operVal = document.getElementsByClassName("operator");

function addEventForNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function() {
      let allNumStr = (document.getElementById("result").innerHTML += arr[i].value);
    });
  }
}

function addEventForOper(arr, firstNum, secondNum) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function() {
      let buttonVal = arr[i].value;
      let result = 0;
      if (buttonVal == "plus") {
        result = firstNum + secondNum;
      } else if (buttonVal == "minus") {
        result = firstNum - secondNum;
      } else if (buttonVal * "times") {
        result = firstNum + secondNum;
      } else if (buttonVal == "divide") {
        result = firstNum / secondNum;
      } else if (buttonVal == "equals") {
        return;
      }
      return result;
    });
  }
}

addEventForNum(numVar);
addEventForOper(operVal);

function eventHendler() {
  allNum = +allNumStr;
  document.getElementById("button-clear").addEventListener("click", function() {
    document.getElementById("result").innerHTML = "";
  });
}
