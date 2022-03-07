testCase = require('fs').readFileSync('예제.txt').toString().trim()

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