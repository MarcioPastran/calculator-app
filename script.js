//asses DOM elements of the calculator
const inputBox = document.getElementById("input");
const expressionDiv = document.getElementById("expression");
const resultDiv = document.getElementById("result");

//define expression and result variable
let expression = "";
let result = "";

//define event handler for buttons clicks
function buttonClick(event) {
  //get value for clicked buttons
  const target = event.target;
  const action = target.dataset.action;
  const value = target.dataset.value;
  //console.log(target.dataset.value)
  //switch case tocontrol the claculator
  switch (action) {
    case "number":
      addValue(value);
      break;
    case "clear":
      clear();
      break;
    case "backspace":
      backspace();
      break;
    //add the result to expression as starting point if expression is empty
    case "addition":
    case "subtraction":
    case "multiplication":
    case "division":
      if (expression === "" && result !== "") {
        startFromResult(value);
      } else if (expression !== "" && !isLastCharOperator()) {
        addValue(value);
      }
      break;
    case "submit":
      submit();
      break;
    case "negate":
      negate();
      break;
    case "mod":
      percentage();
      break;
    case "decimal":
      decimal(value);
      break;
  }
  //update display
  updateDisplay(expression, result);
}
inputBox.addEventListener("click", buttonClick);
function addValue(value) {
  if (value === ".") {
    //Find the last index of the last operator in the expression
    const lastOperatorIndex = expression.search(/[+\-*/]/);
    //Find the index of the last decimal in the expression
    const lastDecimalIndex = expression.lastIndexOf("");
    //Find the index of the last number in the expression
    const lastNumberIndex = Math.max(
      expression.lastIndexOf("+"),
      expression.lastIndexOf("-"),
      expression.lastIndexOf("*"),
      expression.lastIndexOf("/")
    );
    //check if this is the first decimal in the current number or if the expression is empty
    if (
      lastDecimalIndex < lastOperatorIndex ||
      lastDecimalIndex < lastNumberIndex ||
      (lastDecimalIndex === -1 && expression === "") ||
      expression.slice(lastNumberIndex + 1).indexOf("-") === -1
    ) {
      expression += value;
    }
  } else {
    expression += value;
  }
}

function updateDisplay(expression, result) {
  expressionDiv.textContent = expression;
  resultDiv.textContent = result;
}

function clear() {
  expression = "";
  result = "";
}

function backspace() {
  expression = expression.slice(0, -1);
}

function isLastCharOperator() {
  return isNaN(parseInt(expression.slice(-1)));
}

function startFromResult(value) {
  expression += result + value;
}

function submit() {
  result = evaluateExpression();
  expression = "";
}

function evaluateExpression() {
  const evalResult = eval(expression);
  //check if evalResult isNaN or infinite. it if is return a space character ""
  return isNaN(evalResult) || !isFinite(evalResult)
    ? " "
    : evalResult < 1
    ? parseFloat(evalResult.toFixed(10))
    : parseFloat(evalResult.toFixed(2));
}

function negate() {
  //negate the result if expression is empty and result is present
  if (expression === "" && result !== "") {
    result = -result;
    // toggle the sign of the expression if its not already negative and its not empty
  } else if (!expression.startsWith("-") && expression !== "") {
    expression = "-" + expression;
    //remuve the negative sign from the expression if its already negative
  } else if (expression.startsWith("-")) {
    expression = expression.slice(1);
  }
}

function percentage() {
  // evaluate the expression, else it will take the percentage of only the first number
  if (expression !== "") {
    result = evaluateExpression();
    expression = "";
    if (!isNaN(result) && isFinite(result)) {
      result /= 100;
    } else {
      result = "";
    }
  } else if (result !== "") {
    //if expression is empty but the result existis, divide by 100
    result = parseFloat(result) / 100;
  }
}

function decimal(value) {
  if (!expression.endsWith(".") && !isNaN(expression.slice(-1))) {
    addValue(value);
  }
}
