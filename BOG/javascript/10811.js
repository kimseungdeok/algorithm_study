// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim().split('\n');

// console.log(input)

const [n, m] = input.shift().split(" ").map(el=>Number(el))
// console.log(n,m)
let arr = new Array(n).fill(0).map((_, idx) => idx+1)

for(let k = 0; k < m; k++){
    const [i, j] = input.shift().split(" ").map(el=>Number(el))

    if(i === j) continue
    // console.log(arr.slice(i-1, j), arr.slice(j))
    let part1 = arr.slice(0, i-1)
    let part2 = arr.slice(i-1, j)
    let part3 = arr.slice(j)

    arr = part1.concat(part2.reverse().concat(part3))

}
console.log(arr.join(" "))

