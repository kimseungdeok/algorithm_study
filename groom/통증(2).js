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
    let p = Number(input.shift());

    const items = input
        .shift()
        .split(" ")
        .map((el) => Number(el))
        .sort((a, b) => b - a);

    // let itemCount = 0;

    const dp = new Array(p + 1).fill(Infinity);
    dp[0] = 0;

    for (const item of items) {
        for (let i = item; i <= p; i++) {
            dp[i] = Math.min(dp[i], dp[i - item] + 1);
        }
    }

    console.log(dp[p] === Infinity ? -1 : dp[p]);
});
