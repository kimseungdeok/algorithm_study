let input = require('fs').readFileSync('example.txt').toString().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var a = input[0];
let space = ' '
let star = '*'
let j = 0;
// 1. for 문으로 a 만큼 반복
// 2. 스페이스와 별의 개수가 서로 반대이면서 더했을때 5이어야함

for(let i = a; i > 0; i--){
    j += 1
    console.log(space.repeat(i-1) + star.repeat(j))
}