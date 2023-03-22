const operation = prompt(
  'Choose operation: sum, subtraction, multiplication, division, pow, sin, cos'
);

let result = 0;

if (
  operation === 'sum' ||
  operation === 'subtraction' ||
  operation === 'multiplication' ||
  operation === 'division' ||
  operation === 'pow'
) {
  const firstOperand = +prompt('First operand: ', 0);
  const secondOperand = +prompt('Second operand: ', 0);

  if (operation === 'sum') {
    result = firstOperand + secondOperand;
  } else if (operation === 'subtraction') {
    result = firstOperand - secondOperand;
  } else if (operation === 'multiplication') {
    result = firstOperand * secondOperand;
  } else if (operation === 'division') {
    result = firstOperand / secondOperand;
  } else {
    result = firstOperand ** secondOperand;
}	

  alert(`Calculation finished: ${result}`);
} else if (operation === 'sin' || operation === 'cos') {
  const radians = +prompt('Radians: ', 0);

  if (operation === 'sin') {
    result = Math.sin(radians);
  } else {
    result = Math.cos(radians);
}

  alert(`Calculation finished: ${result}`);
} else {
  alert('No such operation');
}