let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp = [];
let count = 1;
for (let i = arr.length - 1; i >= 0; i -= count) {
    temp.push(arr[i]);
    count++;
}
console.log(temp);