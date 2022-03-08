testCase = require('fs').readFileSync('./dev/stdin').toString().trim()

const [A,B] = testCase.split(' ').map(Number)

console.log(A+B)