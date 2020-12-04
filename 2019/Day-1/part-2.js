var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
let sum = 0

array.forEach(x => {
    x = Number(x);
    while(x > 0) {     
        x = Math.floor(x/3) - 2;
        sum += x;
    }
    sum -= x;
})

console.log(sum);