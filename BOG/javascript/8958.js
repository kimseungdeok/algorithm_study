// 1. 최종 점수가 될 변수 sum을 만듦
// 2. 입력 값 두번째줄부터 문자하나하나를 기준으로 나누어 배열을 만듦
// 3. 점수 변수를 만듦(score)
// 4. 다음 요소가 O(오)라면 점수를 1 더해주고 아니면 점수를 1로 만듦
// 5. sum에 score을 더해서 최종 결과를 출력

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n')
let length = input[0]
let sum = 0;
let score = 1;


for(let i = 1; i <= length; i++){
    let ox = input[i].split('')
    sum = 0;
    // console.log(ox)
    for(let j = 0; j < ox.length; j++){
        if(ox[j] === 'O'){
            sum += score;
            if(ox[j] === ox[j+1]){
                score++;
            }else{
                score = 1;
            }
        }
    }
    console.log(sum)
}

