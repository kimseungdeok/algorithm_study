// 문제 : 운동 중독 플레이어
// 언어 : Javascript

// 문제 설명
// 첫째 줄에 플레이어가 스쿼트에 한 세트에서 들어올린 무게 W와 반복 횟수 R이 공백을 두고 주어진다.
// 1RM을 소수점 이하의 값을 버린 뒤에 출력한다.
// 1RM을 구하는 식은 w * (1 + r/30) 이다.

// 입출력 예시
// 입력 : 100 30
// 출력 : 200

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
    rl.close();
});

rl.on("close", () => {
    // 입력을 디스트럭처링하여 할당한다.
    const [w, r] = input
        .shift()
        .split(" ")
        .map((el) => Number(el));
    // 주어진 식에 맞게 값을 넣는다.
    // 단, 소수점을 버려야하므로 Math.floor을 사용한다.
    console.log(Math.floor(w * (1 + r / 30)));
});
