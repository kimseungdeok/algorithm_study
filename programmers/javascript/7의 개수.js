function solution(array) {
    var answer = 0;
    array.forEach((item) => {
        let str = String(item).split("");
        str.forEach((item) => {
            if (item === "7") {
                answer += 1;
            }
        });
    });

    return answer;
}
