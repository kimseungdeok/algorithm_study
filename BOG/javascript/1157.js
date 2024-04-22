const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 풀이 방법
// 1. 단어를 순회하면서 객체의 키와 값을 이용해 각각의 단어의 개수를 확인
// 2. 개수가 같은게 있으면 "?"를 출력, 아니면 개수가 많은 값의 키를 출력

input = input.toUpperCase();
// console.log(input);

const obj = {};

input.split("").forEach((el) => {
    if (obj[el]) {
        obj[el]+=1
    } else {
        obj[el] = 1;
    }
});

const values = Object.values(obj)
const max = Math.max(...values)
let maxCount = 0 // 최댓값의 갯수를 세기위한 변수
values.forEach((el) => {
    if(el == max) {
        maxCount+=1
    }
})


// console.log(Object.entries(obj))
if(maxCount > 1) {
    console.log("?")
} else {
    Object.entries(obj).forEach((el) => {
        if(el[1] === max) {
            console.log(el[0])
        }
    })
}