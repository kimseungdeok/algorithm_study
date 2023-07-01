function calculateOrder(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum += 5 ** i;
    }
    return sum;
}

function solution(word) {
    let answer = 0;

    const aeiou = {
        A: 0,
        E: 1,
        I: 2,
        O: 3,
        U: 4,
    };

    word.split("").map((char, index) => {
        answer += calculateOrder(4 - index) * aeiou[char] + 1;
    });

    return answer;
}
