let input = require('fs').readFileSync('example.txt').toString().split('\n')

let count = Number(input[0]);
let nums = input[1].split(' ')

nums.sort((a, b) => a - b);

console.log(nums[0], nums[nums.length-1])

