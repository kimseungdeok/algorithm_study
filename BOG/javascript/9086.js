const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 풀이 방법
// 1. 첫번째 input 값만큼 순회
// 2. 첫번째 단어와 마지막 단어(length 활용) 뽑아서 출력

// console.log(input.split("\n"))

input = input.split("\n");

const tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
    console.log(input[i][0] + input[i][input[i].length - 1]);
}
