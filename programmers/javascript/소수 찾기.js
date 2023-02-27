function solution(n) {
    let answer = 0;

    const numbers = new Array(n + 1).fill(true);

    for (let i = 2; i <= n; i++) {
        if (numbers[i] === false) {
            continue;
        }

        for (let k = i + i; k <= n; k += i) {
            numbers[k] = false;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (numbers[i] === true) {
            answer++;
        }
    }

    return answer;
}

console.log(solution(10));
