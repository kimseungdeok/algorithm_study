// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = require("fs").readFileSync("example.txt").toString().trim();

// let dec = parseInt(input, 16)

// console.log(dec)

let inputArr = [...input]

// console.log(inputArr)

if(inputArr[0] === '0' && inputArr[1]==='x'){
    console.log(parseInt(input, 16))
}
else if(inputArr[0] === '0'){
    console.log(parseInt(input, 8))
}
else{
    console.log(input)
}