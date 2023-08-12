// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n")
    .map((el) => Number(el))
    .sort((a, b) => a - b);

// 디버깅을 편하게 하기위한 함수
const print = (...text) => {
    console.log(text.join(" "));
};

let answer = []

for(let i = 1; i <= 30; i++){
    if(!input.includes(i)) answer.push(i)
}

console.log(answer.join(" "))