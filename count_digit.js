let input = require('readline-sync')
let number = input.question('Enter Number :- ')
let count = 0;
for (let i = 0; i < number.length; i++) {
    count++
}
console.log(count);