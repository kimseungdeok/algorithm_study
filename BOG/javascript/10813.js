// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

const [n,m] = input.shift().split(" ").map(el=>Number(el))
let arr = new Array(n+1).fill(0).map((_,idx) => idx)

for(let k = 0; k < m; k++){
    let [i,j] = input.shift().split(" ").map(el=>Number(el))
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp 
}
arr.shift()
console.log(arr.join(" "))