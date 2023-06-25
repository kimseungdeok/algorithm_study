const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

function add(arr){
    let result = 0
    arr.forEach((item)=>{
        result += Number(item)
    })
    return result
}

const numArr = input.split(' ')
console.log(add(numArr))

