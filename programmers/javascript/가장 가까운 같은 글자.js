// 1. 이중 for문을 돌기
// 2. 하나는 0부터 끝까지(i)
// 3. 중첩된 for문은 0부터 i까지(j)


function solution(s) {
    let answer = [];
    let count = {};
    const arr = [...s];
    
    arr.forEach((char) => {
        count[char] = (count[char] || 0) +1
    })
    

    console.log(count)
    
    return answer;
}