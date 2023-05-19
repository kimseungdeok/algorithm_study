function solution(n, t, m, p) {
    var answer = '';
    let num = 0, binary = '';
    
    while (binary.length < t * m) {
        binary += (num.toString(n).toUpperCase());
        ++num;
    }
    
    for (let i = p - 1; i < t * m; i += m) {
        answer += binary[i];
    }
    
    return answer;
}