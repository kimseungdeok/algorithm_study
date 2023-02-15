const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");

let answer = [];

for (let i = 1; i < input.length; i++) {
  answer.push(...input[i].split(' ').map(Number));
}

answer.sort(function(a,b){
  return a-b;
})

console.log(...answer);