var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let count = 0;
for(let i = 1; i < array.length; i++) {
    if(Number(array[i]) > Number(array[i-1])) {
        count++;
    }
}

console.log(count);