function solution(code) {
    var answer = "";
    let mode = 0;

    code.split("").forEach((item, index) => {
        if (item === "1") {
            mode = mode === 0 ? 1 : 0;
        }

        if (mode === 0 && item !== "1") {
            if (index % 2 === 0) {
                answer += item;
            }
        } else if (mode === 1 && item !== "1") {
            if (index % 2 === 1) {
                answer += item;
            }
        }
    });
    return answer === "" ? "EMPTY" : answer;
}
