// 1. input을 split을 사용하여 엔터를 기준으로 배열을 만듦
// 2. 배열의 0번째 인덱스와 2번째 인덱스를 더해주고 출력

let input = require('fs').readFileSync('BOG/javascript/example.txt').toString().split('\n')
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

console.log(input)
input.forEach(item => {
    if(isNaN(Number(item[0]))===false){ 
        console.log(Number(item[0])+Number(item[2]))
    }});
