var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split(",");

array = array.sort((a, b) => a - b);
const elements = [...new Set(array)]
let minFuel = Infinity;

for(let i = 0; i < elements.length; i++) {
    let fuel = 0
    for(let j = 0; j < array.length; j++) {
        fuel += Math.abs(array[j] - elements[i]);
    }
    if(fuel < minFuel ) {
        minFuel = fuel
    }
}
console.log(minFuel)