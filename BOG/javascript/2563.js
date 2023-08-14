// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

const tc = Number(input.shift())

let paper = new Array(100).fill().map(el => new Array(100).fill(false))

for(let i = 0; i < tc; i++){
    const colorPaper = input[i]
    const [x,y] = colorPaper.split(" ").map(el => Number(el))

    for(let j = 0; j < 10; j++){
        for(let m = 0; m < 10; m++){
            paper[x+j][y+m] = true
        }
    }
}
let answer = 0
paper.forEach(el => {
    el.forEach(item => {
        if(item === true) {
            answer++
        }
    })
})

console.log(answer)