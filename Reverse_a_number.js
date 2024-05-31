let input = require("readline-sync");
let num = input.question("Enter The Number : ");
 let a = num
let b = 0
let i = 1
while (i <= num.length) {
  b = b * 10 + (a % 10);
  a = Math.floor(a/10)
  i += 1;
}
console.log(b);
