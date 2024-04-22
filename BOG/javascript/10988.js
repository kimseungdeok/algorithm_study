const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 풀이 방법
// 1. 주어진 단어를 배열로 만듦
// 2. 첫번째와 마지막이 같은지 확인
// 3. 위와 같은 방식으로 i와 length-i가 같은지 확인

let answer = 1

for(let i = 0; i < input.length; i++) {
    if(input[i] !== input[input.length-1-i]){
        answer = 0
    }
}
console.log(answer)