var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

function func(inst) {
    let visited = [];
    let acc = 0;
    inst.forEach(y => {
        visited.push(0);
    })
    let i;
    for(i = 0; i < inst.length;) {
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
    }
    if(i === inst.length) {
        return {isInfinite: false, ans: acc}
    }
    let obj = {isInfinite: visited.some(x => x === 1), ans: acc};
    return obj;
}

let inst = [];

array.forEach(x => {
    inst.push(x.split(' '));
})

for(let i = 0; i < inst.length; i++) {
    if(inst[i][0] === 'jmp') {
        inst[i][0] = 'nop';
        obj = func(inst);
        console.log(obj);
        inst[i][0] = 'jmp';
    }
    else if(inst[i][0] === 'nop') {
        inst[i][0] = 'jmp';
        obj = func(inst);
        console.log(obj);
        inst[i][0] = 'nop';
    }
}
