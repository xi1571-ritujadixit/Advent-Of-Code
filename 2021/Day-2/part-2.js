var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let forwardCount = 0;
let depthCount = 0;
let aimCount = 0;

for(let i = 0; i < array.length; i++) {
    const [step, unit] = array[i].split(' ');
    if(step === 'forward') {
        forwardCount += Number(unit);
        depthCount +=  aimCount * Number(unit);
    } else if(step === 'down') {
        aimCount += Number(unit);
    } else {
        aimCount -= Number(unit);
    }
}

console.log(forwardCount * depthCount);