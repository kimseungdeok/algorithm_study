// 문제 : 분해합
// 난이도 : 브론즈 2
// 풀이 언어 : JavaScript

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();
const N = Number(input); // 입력을 숫자 자료형으로 변환한 값
let start = N - (String(N).length * 9)
let M = start; // 시작값 
let answer;

while (true){
    M++;
    let sum = M; 
    for (let i = 0; i < String(M).length; i++){
        sum = sum + Number(String(M).charAt(i)) // 각 자리의 합과 자기 자신을 구하는 코드
    }
    if(sum === N) {
        answer = M;
        break;
    }
    if(M >= N) {
        answer = 0;
        break;
    }
}
console.log(answer)
