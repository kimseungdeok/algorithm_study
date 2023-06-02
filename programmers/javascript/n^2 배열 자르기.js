function solution(n, left, right) {
    var answer = [];
    for(let i = 0; i < n; i++){
        answer[i] = []
        for(let j=0; j < n; j++){
            answer[i].push(j+1)
        }
        for(let j=0; j < i+1; j++){
            answer[i][j] = i+1
        }
    }
    let arr = []
    answer.forEach((item)=> {
        arr = arr.concat(item)
    })
    arr = arr.slice(left, right+1)
    return arr;
}