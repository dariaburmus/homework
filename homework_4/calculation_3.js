const operation = prompt(
  'Choose operation: ',
  'sum, substraction, multiplication, division, pow, sin, cos'
);

let result = 0;

switch (operation) {
  case 'sum':
  case 'substraction':
  case 'multiplication':
  case 'division':
  case 'pow':
    const firstOperand = +prompt('First operand: ', 0);
    const secondOperand = +prompt('Second operand: ', 0);

    switch (operation) {
      case 'sum':
        result = firstOperand + secondOperand;
        break;
      case 'substraction':
        result = firstOperand - secondOperand;
        break;
      case 'multiplication':
        result = firstOperand * secondOperand;
        break;
      case 'division':
        result = firstOperand / secondOperand;
        break;
      case 'pow':
        result = firstOperand ** secondOperand;
        break;
    }

    alert(`Calculation finished: ${result}`);
    break;
  case 'sin':
  case 'cos':
    const radians = +prompt('Radians: ', 0);

    switch (operation) {
      case 'sin':
        result = Math.sin(radians);
        break;
      case 'cos':
        result = Math.cos(radians);
        break;
    }

    alert(`Calculation finished: ${result}`);
    break;
  default:
    alert('No such operation');
}
