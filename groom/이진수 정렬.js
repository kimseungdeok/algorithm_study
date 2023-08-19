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
    const [n, k] = input
        .shift()
        .split(" ")
        .map((el) => Number(el));
    const numbers = input
        .shift()
        .split(" ")
        .map((el) => Number(el));
    numbers.sort((a, b) => b - a);

    // 1의 개수를 세는 함수
    const countOne = (num) => {
        num = String(num);
        let answer = 0;
        for (let i = 0; i < num.length; i++) {
            if (num[i] === "1") {
                answer += 1;
            }
        }
        return answer;
    };

    let newNumbers = numbers.map((el) => el.toString(2));

    newNumbers.sort((a, b) => countOne(b) - countOne(a));
    // console.log(newNumbers)

    console.log(parseInt(newNumbers[k - 1], 2));

    // console.log(parseInt("111", 2))
});
