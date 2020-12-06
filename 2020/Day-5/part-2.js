var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let arr = [];
for(let i = 0; i < 817; i++) {
    arr.push(0);
}

array.forEach(line => {
    line = line.split('')
    let startRow = 0;
    let endRow = 127;
    let startColumn = 0;
    let endColumn = 7;
    let seatId = 0
    for(let i = 0; i < line.length; i++) {
        if(line[i] === 'F') {
            endRow = Math.floor((startRow+endRow)/2);
        }
        else if(line[i] === 'B') {
            startRow = Math.ceil((startRow+endRow)/2);
        }
        else if(line[i] === 'R') {
            startColumn = Math.ceil((startColumn+endColumn)/2);
        }
        else if(line[i] === 'L') {
            endColumn = Math.floor((startColumn+endColumn)/2);
        }
    }
    seatId = startRow * 8 + startColumn;
    arr[seatId] = 1;
    // console.log(arr[seatId]);
});

for(let i = 1; i < 816; i++) {
    if(arr[i-1] === 1 && arr[i+1] === 1 && arr[i] === 0) {
        console.log(i);
    }
}



