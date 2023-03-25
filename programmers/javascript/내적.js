function solution(a, b) {
    var answer = 0;
    a.forEach((item, index) => {
        answer += item * b[index]
    })
    
    return answer;
}