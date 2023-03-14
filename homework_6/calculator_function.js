let operation;
let result = 0;
let operationCount = 0;
let history = [];
let shouldTryAgain = false;

function checkOperation(operationName) {
  return (
    operationName !== 'sum' &&
    operationName !== 'subtraction' &&
    operationName !== 'multiplication' &&
    operationName !== 'division' &&
    operationName !== 'pow' &&
    operationName !== 'sin' &&
    operationName !== 'cos' &&
    operationName !== 'history'
  );
}

function showTryAgainCalculation() {
  return confirm('Do you want more calculations?\nEither OK or Cancel');
}

function showHistory(history) {
  let resultHistory = '';

  for (let i = 0; i < history.length; i++) {
    resultHistory += `${i + 1}. ${history[i]}\n`;
  }

  return resultHistory.length > 0 ? resultHistory : 'No history';
}

function getOperand(message) {
  let operand;

  do {
    operand = +prompt(message, 0);
  } while (isNaN(operand));

  return operand;
}

function calcSinCos(operation) {
  let radians;

  while (isNaN(radians)) {
    radians = +prompt('Radians: ', 0);
  }

  if (operation === 'sin') {
    return Math.sin(radians);
  } else {
    return Math.cos(radians);
  }
}

function calcSum(a, b) {
  return a + b;
}

function calcSubtraction(a, b) {
  return a - b;
}

function calcMultiplication(a, b) {
  return a * b;
}

function calcDivision(a, b) {
  if (b === 0) {
    return 'calculation failed, cannot divide by zero';
  } else {
    return a / b;
  }
}

function calcPow(a, b) {
  return a ** b;
}

function processCalculation(operation, a, b) {
  let calculationResult;

  if (operation === 'sum') {
    calculationResult = calcSum(a, b);
  } else if (operation === 'subtraction') {
    calculationResult = calcSubtraction(a, b);
  } else if (operation === 'multiplication') {
    calculationResult = calcMultiplication(a, b);
  } else if (operation === 'division') {
    calculationResult = calcDivision(a, b);
  } else {
    calculationResult = calcPow(a, b);
  }

  return calculationResult;
}

do {
  do {
    operation = prompt(
      'Choose operation: \nsum \nsubtraction \nmultiplication \ndivision \npow \nsin \ncos \nhistory',
      ''
    );
  } while (checkOperation(operation));

  let firstOperand;
  let secondOperand;

  if (operation === 'history') {
    alert(showHistory(history));
    shouldTryAgain = showTryAgainCalculation();

    continue;
  } else if (operation === 'sin' || operation === 'cos') {
    result = calcSinCos(operation);
  } else {
    firstOperand = getOperand('First operand: ');
    secondOperand = getOperand('Second operand: ');

    result = processCalculation(operation, firstOperand, secondOperand);
  }

  const operationResult = `Operation ${operation} finished with result: ${result}`;

  alert(operationResult);

  history[operationCount] = operationResult;
  operationCount++;

  shouldTryAgain = showTryAgainCalculation();
} while (shouldTryAgain);
