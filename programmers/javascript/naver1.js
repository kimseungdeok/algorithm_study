function solution(arr){
    let obj = {};
    arr.forEach((item) => {
        if(obj[item]){
            obj[item]++
        } else {
            obj[item] = 1
        }
    })
    let answer = [];
    for(let key in obj){
        if(obj[key] > 1){
            answer.push(obj[key])
        }
    }
    return answer.length === 0 ? [-1] : answer;
}

console.log(solution([3,2,4,4,2,5,2,5,5]))