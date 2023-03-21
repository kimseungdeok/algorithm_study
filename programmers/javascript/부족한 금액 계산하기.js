function solution(price, money, count) {
    var answer = 0;
    let overpay = 0
    for(let i = 1; i <= count; i++){
        overpay += price * i
    }
    if(money - overpay < 0){
        answer = Math.abs(money - overpay)
    } else {
        answer = 0
    }
    return answer;
}