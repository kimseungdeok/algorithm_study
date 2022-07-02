function solution(absolutes, signs) {
    var answer = 0;
    let realNum = [];
    // let sum = 0;
    for(let i = 0, signsLen = signs.length; i < signsLen; i++){
        if(signs[i]===false){
            realNum.push(absolutes[i] * -1);
        }
        else {
            realNum.push(absolutes[i]);
        }
        answer += realNum[i];
    }
    
    return answer;
}