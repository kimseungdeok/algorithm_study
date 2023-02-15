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

let r_answer = []

for (let j = 0; j < answer.length; j++) {
  splits = answer[j].split(" ").map(Number);
  // console.log(splits)
  r_answer.push(...splits)
  // answer[j] = splits;
}

r_answer.sort(function(a,b){
  return a-b;
})
console.log(...r_answer);