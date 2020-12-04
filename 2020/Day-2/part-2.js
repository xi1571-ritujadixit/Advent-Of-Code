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
    let position1 = Number(password[0]) - 1;
    let position2 = Number(password[1].split(' ')[0]) - 1;
    let char = password[1].split(' ')[1].split(':')[0];
    let pass = password[1].split(' ')[2];

    let charArray = pass.split('');
    if (charArray[position1] === char && charArray[position2] !== char) {
        count++;
    }
    else if (charArray[position1] !== char && charArray[position2] === char) {
        count++;
    }
    console.log(position1, position2, char, pass, count);
});
