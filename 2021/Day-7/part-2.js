var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split(",");

array = array.sort((a, b) => a - b);
const elements = [...new Set(array)]
let minFuel = Infinity;

for(let i = elements[0]; i < elements[elements.length - 1]; i++) {
    let fuel = 0
    for(let j = 0; j < array.length; j++) {
        const diff = Math.abs(array[j] - i);
        for(let k = 1; k <= diff; k++) {
            fuel += k;
        }
    }
    if(fuel < minFuel ) {
        minFuel = fuel
    }
}
console.log(minFuel)