var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let preamble = 25;

for(let i = 25; i < array.length; i++) {
    let flag = false;
    for(let j = i-preamble; j < i; j++) {
        for(let k = j; k < i; k++) {
            if(Number(array[j]) + Number(array[k]) === Number(array[i])) {
                flag = true;
            }
        }
    }
    if(flag == false) {
        console.log(array[i]);
        break;
    }
}