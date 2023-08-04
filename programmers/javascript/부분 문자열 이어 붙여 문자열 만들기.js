function solution(my_strings, parts) {
    let answer = my_strings.map((el, idx) => {
        let start = parts[idx][0];
        let end = parts[idx][1];

        return el.slice(start, end + 1);
    });
    return answer.join("");
}
