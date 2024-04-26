// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

const checkHansu = (num) => {
    let nums = String(num).split("");
    if (nums.length <= 1) {
        return true;
    }
    let mineses = [];
    nums.forEach((el, idx, arr) => {
        if (idx >= 1) {
            mineses.push(Number(el) - arr[idx - 1]);
        }
    });

    const mSet = new Set(mineses);
    if (mSet.size === 1) {
        return true;
    } else {
        return false;
    }
};

let count = 0;
for (let i = 1; i <= Number(input); i++) {
    if (checkHansu(i)) {
        count++;
    }
}
console.log(count);

// console.log("123"[1])
