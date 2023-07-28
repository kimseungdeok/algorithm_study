function solution(n, control) {
    let answer = n;
    const moveCount = {
        w : 1,
        s : -1,
        d : 10,
        a : -10
    }
    control.split("").forEach(el => {
        answer += moveCount[el]
        
    })
    return answer;
}