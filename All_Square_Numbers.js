let input = require('readline-sync')
let number = input.questionInt('Enter Number :- ')
for (let i = 1; i < number + 1; i++) {
    console.log(i**i);
}
