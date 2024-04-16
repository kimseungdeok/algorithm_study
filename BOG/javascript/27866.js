

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

let [word, number] = input.split("\n")

// console.log(word, number)

function solution(word, number) {
    console.log(word[number-1])
}

solution(word, number)