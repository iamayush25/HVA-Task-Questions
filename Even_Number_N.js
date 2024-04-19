const input = require('readline-sync')
let num = input.questionInt('Enter The number  :- ')
for(let i = 0; i < num + 1; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}