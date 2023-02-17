const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();
const N = Number(input);
let start = N - (String(N).length * 9)
console.log(start)

console.log(input)

inputSum = 0;

for(let i = 0; i < Number(input[0]); i++){
    
    
}

