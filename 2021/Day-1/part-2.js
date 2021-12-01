var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let count = 0;

for(let i = 1; i < array.length; i++) {
    const sum = Number(array[i]) + Number(array[i+1]) + Number(array[i+2]);
    const prevSum = Number(array[i-1]) + Number(array[i]) + Number(array[i+1]);
    if(sum > prevSum) {
        count++;
    }
}

console.log(count);