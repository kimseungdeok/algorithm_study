// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

input = input.split("\n").map((el) => el.split(" "));

// console.log(input);

const [n,m] = input.shift().map((el) => Number(el));

// console.log(nm);

let answer = Array.from({ length: n }, () => new Array(m).fill(0));

// console.log(answer)

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        answer[i][j] = Number(input[i][j]) + Number(input[i + n][j]);
        // console.log(input[i][j], input[3][3])
    }
}

answer.forEach(el => {
    console.log(...el)
})
