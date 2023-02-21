const currentYear = 2023;

alert('Hello!');

const name = prompt('What is your name?', 'John');
const birthYear = prompt('What is your birth year?', 2000);
const country = prompt('Where are you from?', 'Ukraine');
const age = currentYear - birthYear;

alert('Nice to meet you, ' + name  + '! You are ' + age + ' years old! You are from ' + country + '!');
