const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line.split(" "));
}).on("close", function () {
    // console.log(input)
    // 참가자 별 각 대회의 성적을 입력으로 받으면
    // 순위를 출력시켜주는 함수
    const getRank = (arr) => {
        let answer = [];
        const indexAndScore = {};
        arr.forEach((el, idx) => {
            indexAndScore[idx + 1] = el;
        });
        let sortedArr = Object.values(indexAndScore).sort((a, b) => b - a);

        arr.forEach((el) => {
            answer.push(sortedArr.indexOf(el) + 1);
        });

        console.log(answer.join(" "));
    };
    const people = Number(input.shift());
    // console.log(people)
    let peopleTotalScore = new Array(people).fill(0);
    for (let i = 0; i < 3; i++) {
        let peopleScore = input.shift().map((el) => Number(el));
        for (let i = 0; i < people; i++) {
            peopleTotalScore[i] += peopleScore[i];
        }
        // console.log(peopleTotalScore)
        getRank(peopleScore);
    }
    getRank(peopleTotalScore);
});
