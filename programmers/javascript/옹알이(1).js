let answer = 0;
let babySpeak = ["aya", "ye", "woo", "ma"];
let babbling = ["aya", "yee", "u", "maa", "wyeoo"];

let babblingLen = babbling.length;
babySpeak = ["aya", "ye", "woo", "ma"];
for (let i = 0; i < babblingLen; i++) {
    babySpeak.forEach((item) => {
        if (babbling[i].substr(0, item.length) === item) {
            answer++;
            console.log(babbling[i].substr(0, item.length));
            console.log(item);
            console.log(answer);
            babbling[i] = babbling[i].substr(item.length);
        }
    });
}

console.log(answer);


