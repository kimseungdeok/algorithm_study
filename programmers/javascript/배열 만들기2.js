function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++) {
        if (
            String(i)
                .split("")
                .every((item) => item.includes("5") || item.includes("0"))
        ) {
            answer.push(i);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}
