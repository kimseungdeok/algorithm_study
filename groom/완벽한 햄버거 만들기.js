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
    const tc = Number(input.shift());
    const numbers = input
        .shift()
        .split(" ")
        .map((el) => Number(el));
    const max = Math.max(...numbers);
    const mIdx = numbers.indexOf(max);
    let sum = 0;
    numbers.forEach((el) => (sum += el));

    const isUp = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    const isDown = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] < arr[i]) {
                return false;
            }
        }
        return true;
    };

    const up = numbers.slice(0, mIdx);
    const down = numbers.slice(mIdx + 1, numbers.length);

    if (isUp(up) && isDown(down)) {
        console.log(sum);
    } else {
        console.log(0);
    }
});
