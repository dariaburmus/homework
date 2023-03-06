let operation;
let result = 0;
let operationCount = 0;
let shouldTryAgain = false;
let history = [];

do {
  do {
    operation = prompt(
      'Choose operation: ',
      'sum, substraction, multiplication, division, pow, sin, cos, history'
    );
  } while (
    operation !== 'sum' &&
    operation !== 'substraction' &&
    operation !== 'multiplication' &&
    operation !== 'division' &&
    operation !== 'pow' &&
    operation !== 'sin' &&
    operation !== 'cos' &&
    operation !== 'history'
  );

  let firstOperand;
  let secondOperand;
  
  if (operation === 'history') {
    let resultHistory = '';

    for (let i = 0; i < history.length; i++) {
      resultHistory += `${i + 1}. ${history[i]}\n`;
    }

    alert(resultHistory.length > 0 ? resultHistory : 'No history');

    shouldTryAgain = confirm(
      'Do you want more calculations?\nEither OK or Cancel'
    );

    continue;
  } else if (operation === 'sin' || operation === 'cos') {
    let radians;

    while (isNaN(radians)) {
      radians = prompt('Radians: ', 0);
    }

    if (operation === 'sin') {
      result = Math.sin(+radians);
    } else {
      result = Math.cos(+radians);
    }
  } else {
    do {
      firstOperand = +prompt('First operand: ', 0);
    } while (isNaN(firstOperand));

    do {
      secondOperand = +prompt('Second operand: ', 0);
    } while (isNaN(secondOperand));

    if (operation === 'sum') {
      result = firstOperand + secondOperand;
    } else if (operation === 'substraction') {
      result = firstOperand - secondOperand;
    } else if (operation === 'multiplication') {
      result = firstOperand * secondOperand;
    } else if (operation === 'division') {
      if (secondOperand === 0) {
        result = 'calculation failed, cannot divide by zero';
      } else {
        result = firstOperand / secondOperand;
      }
    } else {
      result = firstOperand ** secondOperand;
    }
  }

  const operationResult = `Operation ${operation} finished with result: ${result}`;

  alert(operationResult);

  history[operationCount] = operationResult;
  operationCount++;

  shouldTryAgain = confirm(
    'Do you want more calculations?\nEither OK or Cancel'
  );
} while (shouldTryAgain);