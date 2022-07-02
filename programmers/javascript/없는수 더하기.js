function solution(numbers) {
    var answer;
    var sum = 0;
    for(let i = 0, arrLen = numbers.length; i < arrLen; i++){
        sum += numbers[i];
        answer = 45 - sum;
    }
    return answer;
}