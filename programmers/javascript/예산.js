function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b) => {
        return a-b;
    })
    for(let i = 0; i < d.length; i++){
        if(budget <= 0) {
            break
        }
        answer++
        budget = budget - d[i]
        
    }
    return answer;
}