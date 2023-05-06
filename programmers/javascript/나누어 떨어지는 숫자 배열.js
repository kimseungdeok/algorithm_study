function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(item => item % divisor === 0).sort((a,b) => {return a-b})
    
    return answer.length !==0 ? answer : [-1];
}