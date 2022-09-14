// 1. 점수 중 최댓값을 파악
// 2. 각 점수와 최댓값을 나누어 100을 곱하여 새로룬 배열에 넣음
// 3. 새로운 배열의 평군을 구하고 출력

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let length = Number(input[0]);
let score = input[1].split(' ').map(item => Number(item));
let max = Math.max(...score);
let sum = 0;

score.forEach(item => {
    sum += item/max*100
})

console.log(sum/length)