// 1. 엔터를 기준으로 split하여 배열을 만들고 input 변수에 할당
// 2. 이중 for문을 통해 input 배열의 두번째 요소부터 다시 split을 통해 배열을 만듦
// 3. 만들어진 배열에 두번째 요소부터 더해서 총합을 구하고 첫번째 요소(배열의 길이)로 나눔 -> 평균이 구해짐
// 4. forEach를 통해 평균보다 큰 요소의 개수를 파악하고 전체 길이와 개수를 나누고 100을 곱함 -> 출력

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let inputLength = input[0];

for(let i = 1; i <= inputLength; i++){
    let scores = input[i].trim().split(' ').map(el => Number(el));
    let scoresLength = scores[0]
    // console.log(scores)
    let sum = 0;
    for(let j = 1; j <= scoresLength; j++){
        sum += scores[j]
        // console.log(sum)
    }
    let average = sum/scoresLength;
    let count = 0; 
    for(let j = 1; j <= scoresLength; j++){
        if(scores[j] > average){
            count++;
        }
    }
    console.log((count/scoresLength * 100).toFixed(3)+'%')
}