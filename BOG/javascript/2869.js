const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

let [a, b, v] = input.split(" ").map(el => Number(el));

let curLoc = 0;
let day = 0;

while (true) {
    day += 1;   // 낮에 시작하므로 먼저 일수를 증가시킵니다.
    curLoc += a;  // 낮 동안 올라갑니다.
    if (curLoc >= v) break;  // 목표 높이에 도달하면 반복을 종료합니다.
    curLoc -= b;  // 밤에 미끄러집니다.
}

console.log(day);  // 최종적으로 필요한 일수를 출력합니다.
