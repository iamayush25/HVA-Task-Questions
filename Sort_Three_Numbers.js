let input = require('readline-sync')
let num1 = input.questionInt('Enter The number 1 :- ')
let num2 = input.questionInt('Enter The number 2 :- ')
let num3 = input.questionInt('Enter The number 3 :- ')
if (num1 > num2 && num1 > num3 && num2 > num3) {
    console.log(num3 , num2 , num1);
}
else if (num1 < num2 && num1 < num3 && num2 > num3) {
    console.log(num1 , num3 , num2);
}
