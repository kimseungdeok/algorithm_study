// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 그룹단어란
// 같은 글자가 모두 붙어있는 겻을 그룹단어라고함
// 같은 글자가 붙어있지 않고 떨어져있으면 그룹단어가 아님

input = input.split("\n");
const tc = input[0];

function checkGroupWord(word) {
    word = word.split("");

    for (let i = 0; i < word.length - 2; i++) {
        if (word[i] !== word[i + 1]) {
            for (let j = 2; j < word.length; j++) {
                if (word[i] === word[i + j]) {
                    return false;
                }
            }
        }
    }

    return true;
}

let answer = 0;

for (let i = 1; i <= tc; i++) {
    if (checkGroupWord(input[i])) {
        answer += 1;
    }
}

console.log(answer);
