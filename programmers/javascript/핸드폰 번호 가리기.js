function solution(phone_number) {
    let answer = '';
    let numArr = [...phone_number]
    for(let i = numArr.length-5; i >= 0; i--){
        numArr[i] = "*"
    }
    
    return numArr.join("");
}