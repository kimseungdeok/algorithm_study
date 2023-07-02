const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");

input = input.map((item) => Number(item)).sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < input.length; i++) {
    sum += input[i];
}

const diff = sum - 100;
let result;
for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (input[i] + input[j] === diff) {
            result = input.filter(x => x !== input[i] && x !== input[j])
            break;
        }
    }
    if(result){
        break
    }
}
console.log(result.join("\n"))
