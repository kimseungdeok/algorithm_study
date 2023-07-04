// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

const [n, numbers, v] = input.split("\n");
let answer = 0;
numbers.split(" ").forEach((item) => {
    if (item === v) {
        answer++;
    }
});

console.log(answer);
