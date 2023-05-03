function solution(n) {
    let m = n + 1;
    while(true){
        if(n.toString(2).split('').filter(item => item === '1' ).length === m.toString(2).split('').filter(item => item === '1' ).length){
            break
        }
        m++;
    }
    return m;
}