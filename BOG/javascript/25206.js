// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

input = input.split("\n");
input = input.map((el) => {
    return el.split(" ");
});

let totalScore = 0;
let totalHakjum = 0;

let scores = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0,
    "P": 0,
};

input.forEach((el) => {
    if (el[2] !== "P") {
        totalScore += Number(el[1]) * scores[el[2]];
        totalHakjum += Number(el[1]);
    }
});

console.log(totalScore / totalHakjum);
