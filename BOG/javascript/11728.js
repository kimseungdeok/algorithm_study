const fs = require("fs");
const readline = require("readline");

let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const rl = readline.createInterface({
  input: fs.createReadStream(filepath),
  crlfDelay: Infinity,
});

let answer = [];

let lineNum = 0;

rl.on("line", (line) => {
  lineNum++;
  if (lineNum > 1) {
    answer.push(...line.split(" ").map(Number));
  }
});

rl.on("close", () => {
  answer.sort(function (a, b) {
    return a - b;
  });
  console.log(answer.join(" "));
});
