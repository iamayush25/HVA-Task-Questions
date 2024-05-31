let input = require('readline-sync')
let number = input.questionInt('Enter The Number : ')
let a1 = 0;
let a2 = 1;
let a3 ;
for (let i = 0; i <= number; i++) {
    a3 = a1 + a2 ;
    a1 = a2 ; 
    a2 = a3
    console.log(a3);
}