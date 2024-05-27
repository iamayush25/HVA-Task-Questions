const { question, questionInt } = require("readline-sync")

let arr = [2,3,4,5,6,3,2,9,7]    
let input = questionInt('Enter Number : ')
let i = 0;
temp = false;
while (i <= arr.length){
    if (arr[i] == input ) {
        temp = true
        break
    }
    i++
}
if (temp) {
    console.log("YES");
}
else {
    console.log("NO");
}