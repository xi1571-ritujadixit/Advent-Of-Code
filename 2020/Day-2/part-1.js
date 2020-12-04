const fs = require('fs'); 
const readline = require('readline'); 

const file = readline.createInterface({ 
    input: fs.createReadStream('./input.txt'), 
    output: process.stdout, 
    terminal: false
}); 

let count = 0;

file.on('line', (line) => {
    let password = line.split('-');
    let min = Number(password[0]);
    let max = Number(password[1].split(' ')[0]);
    let char = password[1].split(' ')[1].split(':')[0];
    let pass = password[1].split(' ')[2];

    let charArray = pass.split('');
    let countOfChar = 0
    charArray.forEach((x) => {
        x === char ? countOfChar++ : countOfChar;
    })
    countOfChar >= min && countOfChar <= max ? count++ : count;
    console.log(min, max, char, pass, count);
});