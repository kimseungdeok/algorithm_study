// 1. 입력을 받고 입력값을 split을 통해 배열로 만듦
// 2. 아스키코드를 활용해 새로운 배열에 값을 넣음(숫자 처리를 해주어야함)
// 3. 배열을 스프레드 문법으로 출력

let input = require('fs').readFileSync('example.txt').toString().trim()

let inputArr = input.split('')

let answer = []

inputArr.forEach(item => {
    answer.push(item.charCodeAt(0)-97)
})

console.log(answer)
