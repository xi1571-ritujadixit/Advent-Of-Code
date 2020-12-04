var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n\n");

let count = 0;
array.forEach((x) => {
    x = x.replace(/\n/g, " ")
    if((x.includes('ecl') && x.includes('iyr') && x.includes('hgt') && x.includes('eyr') && x.includes('pid') && x.includes('byr') && x.includes('hcl'))) {
        count++;
        console.log(x + '\n\n');
    }
})

console.log(count);
