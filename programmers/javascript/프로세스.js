function solution(priorities, location) {
    var answer = [];
    const priorLen = priorities.length;
    priorities.forEach((item, index, arr) => {
        arr[index] = [item, index]
    })
    console.log(priorities)
    
    for(let i = 0; i < priorLen; i++){
        let num = priorities.shift()
        console.log(priorities)
        if(Math.max(...priorities) > num){
            priorities.push(num)
        } else {
            answer.push(num)
        }
    }
    answer = answer.concat(priorities)
    return answer;
}