const calculate = () => {
    var fs = require('fs');
    var array = fs.readFileSync('input.txt').toString().split("\n\n");

    let order = array[0].split(',');
    let boards = array.map(ele => ele.split('\n').map(e => e.split(/(\s+)/).filter(el => el.trim().length > 0))).slice(1);

    for(let i = 0; i < order.length; i++) {
        for(let j = 0; j < boards.length; j++) {
            for(let k = 0; k < boards[j].length; k++) {
                let rowSum = 0
                let colSum = 0;
                for(let l = 0; l < boards[j][k].length; l++) {
                    if(boards[j][k][l] === order[i]) {
                        boards[j][k][l] = -1;
                    }
                    rowSum += Number(boards[j][k][l]);
                    colSum += k === l ? Number(boards[j][k][l]) : 0;
                }
                if(rowSum === -5 || colSum === -5) {
                    console.log(boards[j])
                    let total = 0
                    for(let m = 0; m < boards[j].length; m++) {
                        for(let n = 0; n < boards[j][m].length; n++) {
                            total += boards[j][m][n] === -1 ? 0 : Number(boards[j][m][n]);
                        }
                    }
                    return total * order[i];
                }
            }
        }
    }
}

console.log(calculate())