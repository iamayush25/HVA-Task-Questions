let input = require('readline-sync')
let number = input.questionInt('Enter Number :- ')
for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            console.log(i);
        }  
}