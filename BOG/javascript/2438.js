let input = require('fs').readFileSync('example.txt').toString().split('\n');
var a = input[0];
let star = '*'

for(let i = 1; i <= a; i++){
    console.log(star)
    star = star + '*'
}