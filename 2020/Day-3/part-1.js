var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
let finalArray = [];
for(i in array) {
    finalArray.push(array[i].split(''));
}

const calc = (right, down) => {
    let count = 0;
    let startingIndex = 0;
    let position = 0;
    while(startingIndex < finalArray.length) {
        if(finalArray[startingIndex][position] == '#') {
            count++;
        }
        position += right;
        position = position%(finalArray[startingIndex].length);
        startingIndex += down;
    }
    return count;
}

console.log(calc(3, 1));