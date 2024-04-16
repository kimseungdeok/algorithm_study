const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();


for(let i = 0; i < Number(input); i++){
    console.log(" ".repeat(Number(input)-i-1) + "*".repeat(i+i+1))
}

for(let i = Number(input)-2; i >= 0; i--){
    // console.log(Number(input), i)
    console.log(" ".repeat(Number(input)-i-1) + "*".repeat(i+i+1))
}
