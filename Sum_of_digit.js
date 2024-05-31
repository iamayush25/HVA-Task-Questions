let input = require('readline-sync')
let number = input.questionInt('Enter The Number : ')
for (let i = 0; i <= number; i++) {
    remainder = number % 10;
    var sumOfDigits = sumOfDigits + remainder;
    number = Math.floor(number/10);
}
console.log(number);
