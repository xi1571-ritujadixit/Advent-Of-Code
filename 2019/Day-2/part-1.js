var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split(",");
array = array.map(function (x) { 
    return parseInt(x, 10); 
  });

let i = 0;
while(i < array.length) {
    console.log(array[i])
    if (array[i] === 1) {
        array[array[i+3]] = array[array[i+1]] + array[array[i+2]]
    }
    else if (array[i] === 2) {
        array[array[i+3]] = array[array[i+1]] * array[array[i+2]]
    }
    else if (array[i] === 99) {
        break;
    }
    i += 4;
}

console.log(array);