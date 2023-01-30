// title : 소인수분해
// date : 2023-01-30
// status : solved
// link : https://www.acmicpc.net/problem/11653


let input = require("fs").readFileSync("example.txt").toString().trim();
input = parseInt(input);
let num = 2;
let primeArr = [];

do{
    if(input ===1){
        break;
    }
    if(input%num === 0){
        input = input/num;
        primeArr.push(num);
    }else {
        num = num + 1
    }
    
}
while(true);

console.log(primeArr.join("\n"));

