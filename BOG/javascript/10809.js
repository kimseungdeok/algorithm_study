const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();


// 풀이 방법
// 아스키코드를 활용
// 1. 주어진 문자열 순회
// 2. 알파벳 갯수만큼 배열을 만들고, 배열에 -1로 채워넣음
// 3. 위에 만든 배열에서 문자열 - 97의 위치에 그 문자열의 현재 index를 넣어줌

const alArr = new Array(26).fill(-1)

input.split("").forEach((item, index) => {
    if(alArr[item.codePointAt()-97] === -1){
        alArr[item.codePointAt()-97] = index
    }
    
})

console.log(alArr.join(" "))


// 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

// 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 6 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1