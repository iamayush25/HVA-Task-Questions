let input = require('readline-sync')
let number = input.questionInt('Enter Number :- ')
let sum = 0 ;
for (let i = 0; i <= number; i++) {
    sum = sum + i
}
console.log(sum);