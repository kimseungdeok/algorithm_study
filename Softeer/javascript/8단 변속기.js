const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
    input = line;
});

rl.on("close", () => {
    input = input.split(" ").map((el) => Number(el));
    const isAscending = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            let curNum = arr[i];
            let nextNum = arr[i + 1];
            if (curNum > nextNum) {
                return false;
            }
        }
        return true;
    };

    const isDescending = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            let curNum = arr[i];
            let nextNum = arr[i + 1];
            if (curNum < nextNum) {
                return false;
            }
        }
        return true;
    };
    if (isAscending(input)) {
        console.log("ascending");
    } else if (isDescending(input)) {
        console.log("descending");
    } else {
        console.log("mixed");
    }
    process.exit();
});
