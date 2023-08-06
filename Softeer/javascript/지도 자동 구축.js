const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;

rl.on("line", (line) => {
    input = Number(line);
    rl.close();
});

rl.on("close", () => {
    /*입력이 끝나고 실행할 코드*/
    let lineLength = 2;

    for (let i = 0; i < input; i++) {
        lineLength += lineLength - 1;
    }

    console.log(lineLength ** 2);
    process.exit();
});
