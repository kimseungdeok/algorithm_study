// 1. input을 배열로 만듦
// 2. for 문을 통해 가장 큰수를 max에 할당
// 3. max의 인덱스를 확인후 max와 같이 출력

let input = require('fs').readFileSync('example.txt').toString().split('\n')

let max = 0
let count = 1;


for(let i = 0;  i < input.length; i++){
    if(Number(input[i]) > max){
        max = Number(input[i])
    }
    if(max === Number(input[i])){
        count = i + 1
    }
}


console.log(max, count)