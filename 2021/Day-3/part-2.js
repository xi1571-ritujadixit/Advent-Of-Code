var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let oxygen = [...array];
let co = [...array];

for(let i = 0; i < oxygen[0].length; i++) {
    let zeroCount = 0;
    let oneCount = 0;
    for(j = 0; j < oxygen.length; j++) {
        if(oxygen[j][i] === '0') {
            zeroCount++;
        } else {
            oneCount++;
        }
    }
    if(zeroCount > oneCount) {
        oxygen = oxygen.filter((ele) => ele[i] === '0')
    } else if(zeroCount === oneCount) {
        oxygen = oxygen.filter((ele) => ele[i] === '1')
    } else {
        oxygen = oxygen.filter((ele) => ele[i] === '1')
    }
    if(oxygen.length === 1) {
        break;
    }
}

for(let i = 0; i < co[0].length; i++) {
    let zeroCount = 0;
    let oneCount = 0;
    for(j = 0; j < co.length; j++) {
        if(co[j][i] === '0') {
            zeroCount++;
        } else {
            oneCount++;
        }
    }
    if(zeroCount < oneCount) {
        co = co.filter((ele) => ele[i] === '0')
    } else if(zeroCount === oneCount) {
        co = co.filter((ele) => ele[i] === '0')
    } else {
        co = co.filter((ele) => ele[i] === '1')
    }
    if(co.length === 1) {
        break;
    }
}

let oxygenRate = 0;
let coRate = 0
for(let i = 0; i < oxygen[0].length; i++) {
    if(oxygen[0][i] === '1') {
        oxygenRate += Math.pow(2, oxygen[0].length - i - 1);
    }
    if(co[0][i] === '1') {
        coRate += Math.pow(2, co[0].length - i - 1);
    }
}

console.log(oxygenRate * coRate);
