let input = require('readline-sync')
let number = input.questionInt('Enter Number :- ')
for (let i = 1; i <= number * 2; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    
}