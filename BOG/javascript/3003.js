let input = require('fs').readFileSync('example.txt').toString().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const inputNumber = input.map(item => Number(item));


let king = 1 - inputNumber[0]
let queen = 1 - inputNumber[1]
let look = 2 - inputNumber[2]
let bishop = 2 - inputNumber[3]
let knight = 2 - inputNumber[4]
let pawn = 8 - inputNumber[5]

console.log(king, queen, look, bishop, knight, pawn)