var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let inst = [];
let visited = [];
array.forEach(x => {
    inst.push(x.split(' '));
    visited.push(0);
})

let acc = 0;

for(let i = 0; i < inst.length;) {
    if (visited[i] === 0) {
        visited[i] = 1;
        if(inst[i][0] === 'nop') {
            i = i + 1
        }
        else if(inst[i][0] === 'acc') {
            let add = parseInt(inst[i][1]);
            acc += Number(add);
            i = i + 1
        }
        else if(inst[i][0] === 'jmp') {
            let add = parseInt(inst[i][1]);
            i += Number(add);
        }
    }
    else if(visited[i] === 1) {
        break;
    }
    console.log(inst[i], visited[i], acc, i);
}

console.log(acc);