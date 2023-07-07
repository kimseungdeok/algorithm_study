// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

let repeatCount = Number(input) / 4;

let answer = "long ".repeat(repeatCount) + "int";
console.log(answer);
