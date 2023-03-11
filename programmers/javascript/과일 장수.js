function solution(k, m, score) {
    var answer = 0;

    score.sort((a, b) => {
        return b - a;
    });
    let result = [];
    for (let i = 0; i < score.length; i += m) {
        let tempArray;
        tempArray = score.slice(i, i + m);
        if (tempArray.length === m) {
            result.push(tempArray);
        }
    }

    for (let i = 0; i < result.length; i++) {
        result[i] = Math.min(...result[i]) * m;
        answer += result[i];
    }

    return answer;
}
