// 문제 : 프로젝트 매니징
// 언어 : Javascript

// 문제 설명
// 프로젝트에 필요한 여러 기능들이 있는데 그 기능들을 다 구현했을때의 시간을 구하는 문제이다.
// 현재 시간이 `시 : 분` 형태로 주어지고
// 그 이후에 기능별로 걸리는 시간이 분 단위로 주어진다.
// 모든 기능을 구현할때의 시간을 `시 : 분` 형태로 출력하면 된다.

// 입출력 예시
// 입력
// 3
// 10 10
// 50
// 22
// 23
// 출력 : 11 45

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    const n = Number(input.shift());
    const [t, m] = input
        .shift()
        .split(" ")
        .map((el) => Number(el));

    // 현재 시간을 분으로 환산한 변수
    let curTime = t * 60 + m;
    // 현재 시간에서 모든 기능을 구현하는데 걸리는 시간을 합침
    input.forEach((el) => {
        curTime += Number(el);
    });

    // 분 형태의 총 시간을 시와 분으로 나눔
    let time = Math.floor(curTime / 60);
    let minute = curTime % 60;

    // 이 문제는 24시 형태의 시간일 출력해야함
    // 따라서 시간이 24이상이라면 나누어 처리
    if (time >= 24) {
        time = time % 24;
    }

    console.log(time, minute);
});
