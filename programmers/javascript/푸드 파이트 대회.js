// 1. 인덱스의 값을 반으로 나눔
// 2. 그만큼 repeat함
// 3. 문자열을 reverse함
// 4. 0붙이고 reverse한 문자열 붙임
function solution(food) {
    var answer = '';
    food.forEach((food, index)=> {
        answer += index.toString().repeat(parseInt(food/2))
    })
    const reverseStr = answer.split("").reverse().join("");
    answer = answer +"0"+ reverseStr
    return answer;
}