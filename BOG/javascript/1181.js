// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// input을 배열로 바꾸기 위한 코드
input = input.split("\n");

const tc = Number(input.shift());
// console.log(tc)

input = new Set(input);
input = [...input];

// input.sort((a, b) => a.length - b.length);
input.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length; // 길이에 따라 먼저 정렬
    } else {
        return a.localeCompare(b); // 길이가 같으면 사전순으로 정렬
    }
});

input.forEach((el) => console.log(el));
