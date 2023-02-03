// 1. 정점과 간선의 개수를 받음
// 2. 간선의 개수 만큼 순회(for문)
// 3. 정점1, 정점2, 가중치를 배열로 받음
// 4. 가중치를 기준으로 정렬
// 5. 정점의 개수 만큼 사이클 테이블 생성

const fs = require("fs");
let input = fs.readFileSync('example.txt').toString().trim().split('\n')

let cycleTable = [];
let VandE = input[0].split(' ').map(Number);
// console.log(VandE)
let v = VandE[0]
let e = VandE[1]

for (let i = 1; i <= e; i++){
    input[i] = input[i].split(' ').map(Number);
    // console.log(input[i])
}


for (let i = 1; i <= v; i++){
    
}


