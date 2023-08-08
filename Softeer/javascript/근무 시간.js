const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    /*입력이 끝나고 실행할 코드*/
    let sum = 0;
    input.forEach((el) => {
        let times = el.split(" ");
        times = times.map((el) => {
            let time = el.split(":");
            return Number(time[0]) * 60 + Number(time[1]);
        });

        sum += times[1] - times[0];
    });
    console.log(sum);
    process.exit();
});
