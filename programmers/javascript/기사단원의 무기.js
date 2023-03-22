function countDivisor(num){
    let count = 0
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            count++
            if(num / i != i) count++
        }
    }
    return count;
}

function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i++){
        if(countDivisor(i) <= limit){
            answer += countDivisor(i)
        } else {
            answer += power
        }
    }
  
    return answer;
}