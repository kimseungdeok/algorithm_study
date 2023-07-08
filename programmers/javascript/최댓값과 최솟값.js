function solution(s) {
    var answer = "";
    let array = s.split(" ");
    answer =
        answer + String(Math.min(...array)) + " " + String(Math.max(...array));

    return answer;
}
