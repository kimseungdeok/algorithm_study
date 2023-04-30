function solution(s) {
    var answer = true;
    if(s.length !== 4 && s.length !== 6){
        answer = false
    }
    for(let i = 0; i < s.length; i++){
        if(isNaN(Number(s[i]))){
            answer = false
        }
    }
    

    

    return answer;
}