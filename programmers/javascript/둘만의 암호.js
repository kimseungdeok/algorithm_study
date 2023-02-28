function solution(s, skip, index) {
    let alphabet = Array.from({length:26}, (v,i) => String.fromCharCode(i + 97));

    skip.split("").map((i) => {
        const findSkipIdx = alphabet.indexOf(i);
        if(findSkipIdx) alphabet.splice(findSkipIdx,1);
    })

    const result = s.split("").map((i)=>{
        const findSIdx = alphabet.indexOf(i);
        return alphabet[(findSIdx + index) % alphabet.length]
    })
    return result.join("")
}