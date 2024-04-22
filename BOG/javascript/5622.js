const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 풀이 방법
// 1. if문을 활용하여 각각의 단어에 맞는 숫자를 부여

let sum = 0

input.split("").forEach((el) => {
    if(["A","B","C"].includes(el)){
        sum += 3
    } else if(["D","E","F"].includes(el)){
        sum += 4
    } else if(["G","H","I"].includes(el)){
        sum += 5
    } else if(["J","K","L"].includes(el)){
        sum += 6
    } else if(["M","N","O"].includes(el)){
        sum += 7
    } else if(["P","Q","R","S"].includes(el)){
        sum += 8
    } else if(["T","U","V"].includes(el)){
        sum += 9
    } else if(["W","X","Y","Z"].includes(el)){
        sum += 10
    } 
})
console.log(sum)
// console.log(["A","B","C"].includes("A"))