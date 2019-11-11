let numPress = document.getElementsByClassName("number");
    let operPress = document.getElementsByClassName("operator");
    let allNumPress = document.getElementById("result").innerHTML;
    let prevNum = 0;
    let prevOper = null;
    let clearOperWind = false;


    document.getElementById("button-equal").addEventListener("click", function () {
      performPrevOp();
      prevNum = 0;
      prevOper = null;
    })

    document.getElementById("button-clear").addEventListener("click", function () {
      document.getElementById("result").innerHTML = "";
      clearOperWind = false;
    });


    for (let i = 0; i < numPress.length; i++) {
      numPress[i].addEventListener("click", function () {
        if (clearOperWind) {
          clearResult();
          clearOperWind = false;
        }
        document.getElementById("result").innerHTML += numPress[i].value;
      });
    }

    for (let i = 0; i < operPress.length; i++) {
      operPress[i].addEventListener("click", function () {
        if (prevOper == null) {
          prevOper = operPress[i].value;
          prevNum = readResult();
        } else { 
          performPrevOp(); 
          prevOper = operPress[i].value;
        }
        clearOperWind = true;
      });
    }

    function performPrevOp() {
      if (prevOper == "plus") {
        prevNum += readResult();
      } else if (prevOper == "times") {
        prevNum *= readResult();
      } else if (prevOper == "minus") {
        prevNum -= readResult();
      } else if (prevOper == "divide") {
        prevNum /= readResult();
      } else if (prevOper == "power") {
        prevNum = Math.pow(prevNum, readResult());
      }
      document.getElementById("result").innerHTML = prevNum;
    }

    function readResult() {
      return +(document.getElementById("result").innerHTML);
    }

    function clearResult() {
      document.getElementById("result").innerHTML = "";
    }
