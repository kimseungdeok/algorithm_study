function solution(answers) {
    var answer = [];
    let answerArr = [0,0,0];

    let one = '12345'.repeat(10000/5)
    let two = '21232425'.repeat(10000/8)
    let three = '3311224455'.repeat(10000/10)
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === Number(one[i])){
            answerArr[0]++
        } if(answers[i] === Number(two[i])){
            answerArr[1]++
        } if(answers[i] === Number(three[i])){
            answerArr[2]++
        }
    }
    console.log(answerArr)
    if(answerArr[0] ===  answerArr[1] && answerArr[1] === answerArr[2]){
        answer.push(1)
        answer.push(2)
        answer.push(3)
    } else {
        answer.push(answerArr.indexOf(Math.max(...answerArr))+1)
    }
    
    
    return answer;
}