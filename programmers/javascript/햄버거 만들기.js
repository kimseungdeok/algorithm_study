function solution(ingredient) {
    var answer = 0;
    let join = ingredient.join("")
    console.log(join.includes('1231'))
    
    while(join.includes('1231')){
        answer++
        join = join.replace('1231', '')
    }
    
    return answer;
    
}