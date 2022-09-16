let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let length = input[0]
let numberArr = input[1].split('')
let sum = 0

numberArr.forEach(item => sum += Number(item))

console.log(sum)