// 1. 처음 주어진 수가 10 미만인 경우를 if을 통해 확인하여 앞에 0을 붙여줌(숫자는 문자열 형태로 저장됨)
// 2. while 문을 통해 각 자리를 더함 (while 문의 조건은 결과가 입력한 수와 다를때)
// 2.1. 그리고 새로운 수를 만듦(더한 결과의 첫째자리와 이전의 첫째 자리)
// 3. 계속 반복

// let input = require('fs').readFileSync('example.txt').toString()
let input = require('fs').readFileSync('/dev/stdin').toString();
let result = Number(input);
let count = 0;

// if(Number(input)<10){


do{
    if(parseInt(result / 10) + result % 10 < 10){
        result = (result % 10) * 10 + parseInt(result / 10) + result % 10
    }else {
        result = (result % 10) * 10 + (parseInt(result / 10) + result % 10) % 10
    }
    count++
}while(input != result)

console.log(count)

