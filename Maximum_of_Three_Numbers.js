let input = require('readline-sync')
let max1 = input.questionInt('Enter The number 1 :- ')
let max2 = input.questionInt('Enter The number 2 :- ')
let max3 = input.questionInt('Enter The number 3 :- ')
if (max1 > max2 && max1 > max3) {
    console.log(max1 , "is Grater");
}
else if (max2 > max1 && max2 > max3) {
    console.log(max2 , "is Grater");
}
else if (max3 > max1 && max3 > max2) {
    console.log(max3 , "is Grater");
}