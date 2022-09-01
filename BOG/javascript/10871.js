let input = require('fs').readFileSync('example.txt').toString().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input1 = input[0].split(' ');
let input2 = input[1].split(' ');

let arr = []



for(let i = 0; i < input2.length; i++){
    
    if(Number(input2[i]) < Number(input1[1])){
        arr.push(Number(input2[i]))
    }
}
console.log(...arr)

