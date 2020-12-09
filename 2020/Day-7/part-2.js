var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let map = new Map();

array.forEach(x => {
    x = x.split('contain')
    x[1] = x[1].split(',');
    let contains = [];
    x[1].forEach(ele => {
        contains.push({'val': ele.split(' ')[1], 'str': ele.split(' ')[2] + ' ' + ele.split(' ')[3]});
    })
    map.set(x[0].replace('bags', '').trim(), contains);
})

console.log(map);

function func(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        x = arr[i];  
        if(x.val !== 'no') {
            count += Number(x.val) * func(map.get(x.str));    
        }
        else {
            return 1; 
        }
    }    
    return count;
}


console.log(func(map.get('shiny gold'))-1);