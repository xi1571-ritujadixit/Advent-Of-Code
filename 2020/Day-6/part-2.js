var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n\n");

count = 0

array.forEach(x => {
    x = x.split('\n');
    let eve = x[0].split('');
    eve.forEach(z => {
        if(x.every(y => y.includes(z))) {
            count++;
        }
    })
})

console.log(count);