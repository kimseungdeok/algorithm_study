function solution(s, n) {
    var answer = [];
    const big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    for(let i = 0; i < s.length; i++){
        // console.log(big.indexOf(s[i]))
        if(s[i] === ' '){
            answer.push(' ')
        }
        // 대문자이면
        // else if(big.indexOf(s[i]) !== -1){
        else if(big.includes(s[i])){
            // 문자에서 n만큼 밀었을때 
            if(big.indexOf(s[i]) + n <= big.indexOf('Z')){
                answer.push(big[big.indexOf(s[i])+n])
            }else {
                answer.push(big[big.indexOf(s[i]) + n - big.indexOf('Z') -1])
                console.log(big.indexOf(s[i]) + n - big.indexOf('Z') -1)
            }
        } else if(small.includes(s[i])) {
            if(small.indexOf(s[i]) + n <= small.indexOf('z')){
                answer.push(small[small.indexOf(s[i])+n])
            }else {
                answer.push(small[small.indexOf(s[i]) + n - small.indexOf('z') -1])
            }
        }
    }

    return answer.join("");
}