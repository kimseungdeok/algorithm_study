// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

let inputs = input.split("\n")
// console.log(inputs)
let testcaseNum = inputs.shift()

inputs.map((item) => {
    let [a,b] = item.split(",")
    console.log(Number(a) + Number(b))
})