var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let forwardCount = 0;
let depthCount = 0;

for(let i = 0; i < array.length; i++) {
    const [step, unit] = array[i].split(' ');
    if(step === 'forward') {
        forwardCount += Number(unit)
    } else if(step === 'down') {
        depthCount += Number(unit);
    } else {
        depthCount -= Number(unit);
    }
}

console.log(forwardCount * depthCount);