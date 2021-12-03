var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let gammaRate = '';
let epsilonRate = '';

for(let i = 0; i < array[0].length; i++) {
    let zeroCount = 0;
    let oneCount = 0;
    for(j = 0; j < array.length; j++) {
        if(array[j][i] === '0') {
            zeroCount++;
        } else {
            oneCount++;
        }
    }
    if(zeroCount > oneCount) {
        gammaRate += '0'
    } else {
        gammaRate += '1'
    }
    if(zeroCount > oneCount) {
        epsilonRate += '1'
    } else {
        epsilonRate += '0'
    }
}

let gamma = 0;
let epsilon = 0;
for(let i = 0; i < gammaRate.length; i++) {
    if(gammaRate[i] === '1') {
        gamma += Math.pow(2, gammaRate.length - i - 1);
    }
    if(epsilonRate[i] === '1') {
        epsilon += Math.pow(2, gammaRate.length - i - 1);
    }
}

console.log(Number(gamma) * Number(epsilon));