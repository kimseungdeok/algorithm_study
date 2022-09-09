// 1. 입력은 0 0이 나올때 까지이므로 입력을 받을때 '\n'로 split해서 배열을 만듦
// 2. for문을 돌려서 다시 split을 통해 배열을 만들고 각 배열의 요소를 더해줌
// 3. 바로 출력

let input = require('fs').readFileSync('example.txt').toString().split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 1번째 풀이. 백준에서 eval 함수는 오류 발생
// for(let i = 0; i < input.length-1; i++){
//     eval(`var input` + i + `= input[${i}].split(' ')
//     console.log(Number(input${i}[0]) + Number(input${i}[1]))`)
// }

// 2번째 풀이. A + B 가 0일때 종료되도록 처리 안함. -> 오류 발생
// let inputAB = []

// for(let i = 0; i < input.length -1; i++){
//     inputAB.push(input[i].split(' '))
    
// }

// for(let i = 0; i < inputAB.length; i++){
//     console.log(Number(inputAB[i][0])+ Number(inputAB[i][1]))
// }


let sum = 0;

for(let i = 0; i < input.length; i++){
    let sum = Number(input[i][0])+ Number(input[i][2]);
    
    if(sum === 0){
        break;
    }
    console.log(sum);
}