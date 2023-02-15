const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");

let answer = [];
// console.log(input.length)

for (let i = 1; i < input.length; i++) {
  // console.log(i)
  // console.log(input[i])
  answer.push(input[i]);
}
// console.log(answer[0].split(' '))

for (let j = 0; j < answer.length; j++) {
  splits = answer[j].split(" ").map(Number);
  answer[j] = splits;
}

console.log(answer);

Ttest2223333;
