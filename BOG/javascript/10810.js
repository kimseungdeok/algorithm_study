// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(el=>Number(el))

// console.log(n,m)
let balls = new Array(n).fill(0)

for(let p = 0; p < m; p++){
    let [i,j,k] = input.shift().split(" ").map(el=>Number(el))
    for(let l = i-1; l <= j-1; l++){
        balls[l] = k
    }
    
}

console.log(balls.join(" "))