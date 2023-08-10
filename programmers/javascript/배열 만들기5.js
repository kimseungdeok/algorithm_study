function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((el) => {
        let sliceNum = Number(el.split("").splice(s, l).join(""));
        if (sliceNum > k) {
            answer.push(sliceNum);
        }
    });
    return answer;
}
