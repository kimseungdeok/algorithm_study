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
    const t = Number(input.shift());
    // console.log(input)

    let sum = 0;
    for (let i = 0; i < t; i++) {
        let [n1, s, n2] = input.shift().split(" ");
        n1 = Number(n1);
        n2 = Number(n2);
        if (s === "+") {
            sum = sum + (n1 + n2);
        } else if (s === "-") {
            sum = sum + (n1 - n2);
        } else if (s === "/") {
            sum = sum + Math.floor(n1 / n2);
        } else if (s === "*") {
            sum = sum + n1 * n2;
        }
    }

    console.log(sum);
});
