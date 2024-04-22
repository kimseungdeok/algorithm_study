const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 풀이 방법
// split을 활용한 방법
// 1. 단어의 존재여부를 includes를 통해 확인 후 있으면 split으로 분리
// 2. 분리하면서 정답 변수에 +1

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for(let word of alphabet){
    input = input.split(word).join("X")
    // console.log(input)
    console.log(word)
}

console.log(input)

// console.log(input.length)

