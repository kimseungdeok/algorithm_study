// testCase = require('fs').readFileSync('./dev/stdin').toString().trim()
testCase = require('fs').readFileSync('예제.txt').toString().trim()

const [hour, minute] = testCase.split(' ').map(Number)

if(minute<45 && hour>0){
    hour-1
    minute+15
    console.log(hour + ' ' + minute)
}
else{
    hour+23
    minute-45
    console.log(hour + ' ' + minute)
}
