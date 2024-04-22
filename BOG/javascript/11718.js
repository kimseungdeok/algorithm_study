const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 풀이 방법
// 1. 그냥 입력받은 것 출력

input = input.split("\n")
input.forEach((el) => {
    console.log(el)
})