const firstInput  = +prompt('Input first operand', 0);
const secondInput = +prompt('Input second operand', 0);

const sum = firstInput + secondInput;
const substractionResult = firstInput - secondInput;
const multiplicationResult = firstInput * secondInput;
const divisionResult = firstInput / secondInput;

console.log('Calculations are finished!');
console.log('sum: ' + firstInput  + ' + ' + secondInput + ' = ' + sum);
console.log('substraction: ' + firstInput + ' - ' + secondInput + ' = ' + substractionResult);
console.log('multiplication: ' + firstInput + ' * ' + secondInput + ' = ' + multiplicationResult);
console.log('division: ' + firstInput + ' / ' + secondInput + ' = ' + divisionResult);
