// title : 소인수분해
// date : 2023-01-30
// status : solved
// link : https://www.acmicpc.net/problem/11653


let input = require("fs").readFileSync("example.txt").toString().trim();

let num = 2;
// console.log(num)

do{
    if(input ===1){
        break;
    }
    if(input%num === 0){
        input = input/num;
        console.log(num)
    }else {
        num = num + 1
    }
    
}
while(true);

