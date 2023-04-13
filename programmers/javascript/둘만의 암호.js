function solution(s, skip, index) {
    var answer = [];
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    skip = skip.split("").sort()

    // alphabet에서 skip 문자열을 빼는 로직
    let k = 0
    alphabet.forEach((item, index, arr) => {
        if(skip[k] === item){
            arr[index] = ''
            k++
        }
    })
    alphabet = alphabet.filter(word => word !== '')
    
    
    for(let i = 0; i < s.length; i++){
        let answerIdx = alphabet.indexOf(s[i]) + index
        let totalLength = 26 - skip.length
        if(answerIdx >= totalLength){
            answerIdx = answerIdx % totalLength

        }
        answer.push(alphabet[answerIdx])
    }
    return answer.join("");
}