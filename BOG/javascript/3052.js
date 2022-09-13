// 1. 입력 값을 엔터 기준으로 배열을 만듦
// 2. forEach를 통해 각 요소를 42로 나누고 나머지를 새로운 배열에 push
// 3. set을 통해 중복을 제거
// 4. length를 출력

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n')
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let rests = []

input.forEach(item => rests.push(Number(item) % 42))

let newRests = new Set(rests)

console.log([...newRests].length)