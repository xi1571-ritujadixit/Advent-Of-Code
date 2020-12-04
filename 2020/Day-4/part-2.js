var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n\n");

let count = 0;
let finalArr = [];
array.forEach((x) => {
    x = x.replace(/\n/g, " ")
    x = x.split(' ');
    let obj = new Object();
    x.forEach(y => {
        y = y.split(':');
        obj[y[0]] = y[1];
    })
    finalArr.push(obj);
})

const eyes = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

let byr = (num) => {
    return num >= 1920 && num <= 2002 ? true : false;
}

let eyr = (num) => {
    return num >= 2020 && num <= 2030 ? true : false;
}

let iyr = (num) => {
    return num >= 2010 && num <= 2020 ? true : false;
}

let pid = (num) => {
    return String(num).length === 9;
}

let ecl = (num) => {
    return eyes.some(x => x === num)
}

let hgt = (num) => {
    if(num) {
        let n = Number(num.replace(/[^0-9]/g,''))
        if(RegExp('(?:cm)').test(num)) {
            return n >= 150 && n <= 193;
        }
        else if(RegExp('(?:in)').test(num)) {
            return n >= 59 && n <= 76;
        }
        else {
            return false;
        }
    }
    else {
        return false
    }
}

let hcl = (num) => {
    return RegExp('^#[0-9a-f]{6}').test(num);
}

finalArr.forEach(x => {   
    if(x.byr && x.iyr && x.eyr && x.ecl && x.pid && x.hgt && x.hcl) {
        if(byr(x.byr) && iyr(x.iyr) && eyr(x.eyr) && ecl(x.ecl) && pid(x.pid) && hgt(x.hgt) && hcl(x.hcl)) {
            count++;
        }
    }
})
console.log(count);
