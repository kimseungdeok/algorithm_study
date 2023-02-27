// 1. 같은 수를 찾고 배열에 넣음(twin이란 배열 하나 만들기)
// 2. twin 배열을 sorting함(큰 수가 앞에 있게)
function solution(X, Y) {
    let answer = '';
    let Xarr = [...X]
    let Yarr = [...Y]
    
    const Xlen = Xarr.length;
    const Ylen = Yarr.length;
    for(let i = 0; i < Xlen; i++){
        for(let j = 0; j < Ylen; j++){
            if(Xarr[i] === Yarr[j])
        }
    }
    return answer;
}