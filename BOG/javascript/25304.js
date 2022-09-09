let input = require('fs').readFileSync('example.txt').toString().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let amount = Number(input[0]); 
let numberKinds = input[1];
let prices = []
let numbers = []
let sums = []

for(let i = 0; i < numberKinds; i++){
    prices.push(Number(input[i+2].split(' ')[0]));
    numbers.push(Number(input[i+2].split(' ')[1]));
    let sum = prices[i] * numbers[i]
    sums.push(sum)
}


const sum = sums.reduce(function add(sum, currValue){
    return sum + currValue;
}, 0)


if(amount === sum){
    console.log('Yes')
}else {
    console.log('No')
}