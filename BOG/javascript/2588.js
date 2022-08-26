let input = require('fs').readFileSync('BOG/javascript/example.txt').toString().split('\n');
var a = parseInt(input[0]);
var b = input[1];
console.log(a*b[2]);
console.log(a*b[1]);
console.log(a*b[0]);
console.log(a*b);
