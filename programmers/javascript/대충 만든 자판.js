function solution(keymap, targets) {
    var answer = [];

    let result = new Map();
    keymap.forEach((item, index, arr) => {
        for(let i = 0; i < item.length; i++){
            if(result.has(item[i])){
                result.set(item[i], Math.min(result.get(item[i]), i+1))
            } else {
                result.set(item[i], i+1)
            }
        }
        
    })

    targets.forEach((item, index, arr) => {
        let sum = 0
        for(let j = 0; j < item.length; j++){
            if(result.has(item[j])){
                sum += result.get(item[j])
            } else {
                sum -= Infinity
            }
        }
        if(sum >= 0){
            answer.push(sum)
        }else {
            answer.push(-1)
        }
    })
    
    return answer;
}