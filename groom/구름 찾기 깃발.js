const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line.split(" "));
});

rl.on("close", () => {
    const [n, k] = input.shift().map((el) => Number(el));
    let array = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // console.log(input[i][j])
            // current value
            let cv = 0;
            // current Location
            let cl = input[i][j];
            // left up : 왼쪽 위 대각선
            let lu = i >= 1 && j >= 1 ? input[i - 1][j - 1] : undefined;
            // right up : 오른쪽 위 대각선
            let ru = i >= 1 && j < n - 1 ? input[i - 1][j + 1] : undefined;
            // left down : 왼쪽 아래 대각선
            let ld = i < n - 1 && j >= 1 ? input[i + 1][j - 1] : undefined;
            // right down : 오른쪽 아래 대각선
            let rd = i < n - 1 && j < n - 1 ? input[i + 1][j + 1] : undefined;
            // 위
            let u = i >= 1 ? input[i - 1][j] : undefined;
            // 아래
            let d = i < n - 1 ? input[i + 1][j] : undefined;
            // 오른쪽
            let r = j < n - 1 ? input[i][j + 1] : undefined;
            // 왼쪽
            let l = j >= 1 ? input[i][j - 1] : undefined;

            if (cl === "0") {
                if (lu === "1") {
                    cv++;
                }
                if (ru === "1") {
                    cv++;
                }
                if (ld === "1") {
                    cv++;
                }
                if (rd === "1") {
                    cv++;
                }
                if (u === "1") {
                    cv++;
                }
                if (d === "1") {
                    cv++;
                }
                if (r === "1") {
                    cv++;
                }
                if (l === "1") {
                    cv++;
                }
            }
            array.push(cv);
        }
    }
    // console.log(array);
    let answer = 0;
    array.forEach((el) => {
        if (el === k) {
            answer++;
        }
    });
    console.log(answer);
});
