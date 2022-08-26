testCase = require('fs').readFileSync('example.txt').toString().trim()

const [A,B] = testCase.split(' ').map(Number)

if(A<B){
    console.log("<");
    }
    else if(A>B){
    console.log(">");
    }
    else if(A==B){
    console.log("==");
    }