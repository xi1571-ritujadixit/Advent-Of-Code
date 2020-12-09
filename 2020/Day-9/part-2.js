var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

for(let i = 0; i < array.length; i++) {
    let sum = 0
    for(let j = i; j < array.length; j++) {
        sum += Number(array[j])
        if(sum > 675280050) {
            break;
        }
        else if(sum === 675280050) {
            let arr = array.slice(i, j+1)
            var result = arr.map(function (x) { 
                return parseInt(x, 10); 
              });
            console.log(Math.max(...result) + Math.min(...result));
        }
    }
}