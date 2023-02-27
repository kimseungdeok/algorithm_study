function solution(n) {
    let answer = 0;

    const numbers = new Array(n + 1).fill(-1);

    for (let i = 2; i <= n; i++) {
        if (numbers[i] === 0) {
            continue;
        }

        for (let k = i + i; k <= n; k += i) {
            numbers[k] = 0;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (numbers[i] === -1) {
            answer++;
        }
    }

    return answer;
}

console.log(solution(10));
