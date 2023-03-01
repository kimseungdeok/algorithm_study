function solution(s){
    let answer = true;
    let cntP = 0;
    let cntY = 0;
    for(c of s){
        if(c === 'p' || c ==='P'){
            cntP++
        }
        else if(c === 'y' || c ==='Y'){
            cntY++
        }
    }
    
    if(cntP !== cntY){
        answer = false
    }

    return answer;
}