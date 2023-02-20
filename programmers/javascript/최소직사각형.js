// 1. 가로 길이보다 세로 길이가 긴 명함은 바꿈
// 2. 0번째 인덱스에서 제일 긴것, 1번째 인덱스에서 제일 긴것 찾기
// 3. 곱하고 return
function solution(sizes) {
    let answer = 0;
    let sizeLen = sizes.length;
    let width = []; // 가로 값
    let height = []; // 세로 값
    
    for(let i = 0; i < sizeLen; i++){
        if(sizes[i][0] < sizes[i][1]){
            sizes[i].unshift(sizes[i].pop());
        }
        width.push(sizes[i][0])
        height.push(sizes[i][1])
    }
    
    let maxWidth = Math.max(...width)
    let maxHeight = Math.max(...height)
    
    
    
    return maxWidth * maxHeight;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));