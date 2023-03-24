function solution(t, p) {
    let answer = 0;
    let tLen = t.length
    let pLen = p.length
    for(let i = 0; i <= tLen - pLen; i++){
        if(Number(t.slice(i, i+pLen)) <= Number(p)){
            answer++
        }
    }
    return answer;
}