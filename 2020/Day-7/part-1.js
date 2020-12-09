var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let map = new Map();
let count = 0;

array.forEach(x => {
    x = x.split('contain')
    x[1] = x[1].split(',');
    let contains = [];
    x[1].forEach(ele => {
        ele = ele.replace(/[0-9]/g, '').trim();
        ele = ele.split(' ')[0] + ' ' + ele.split(' ')[1];
        contains.push(ele);
    })
    map.set(x[0].replace('bags', '').trim(), contains);
})

console.log(map);

function func(entry) {
    // console.log(entry);
    let flag = false;
    if(!entry) {
        return false;
    }
    for(let i = 0; i < entry.length; i++) {
        if(entry[i] == 'shiny gold') {
            return true;
        }
        else {
            flag = flag || func(map.get(entry[i]));
        }
    }
    return flag;
}

for(let entry of map.entries()) {
    console.log(func(entry[1]));
    if(func(entry[1])) {
        count++;
    }
}
console.log(count);