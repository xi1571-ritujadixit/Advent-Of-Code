var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n\n");

let sum = 0

array.forEach(x => {
    x = x.replace(/\n/g, "")
    var s = Array.prototype.map.call(x, 
        (obj,i)=>{
          if(x.indexOf(obj,i+1)==-1 ){
           return obj;
          }
        }
      ).join("");
    let rx = /[a-z]/gi;
    var m = s.match(rx);
    if (m) {
        console.log(m.length);
    }
    sum += m.length
    
})
console.log(sum)
