var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let sum = 0

array.forEach(x => {
    sum += Math.floor(Number(x)/3) - 2
})

console.log(sum);
