function solution(s) {
    var answer = -1;
    s = s.split("");
    const len = s.length; // 문자열 s의 길이
    // console.log(s)
    let i = 0;
    while (true) {
        if (s[i] === s[i + 1]) {
            s[i] = "";
            s[i + 1] = "";
            s = Array.isArray(s) ? s.join("") : s;
        }
        s = Array.isArray(s) ? s : s.split("");
        if (s[i] !== s[i + 1] || s === []) {
            break;
        }
        i += 1;
    }

    // console.log(Array.isArray(s))
    console.log(s);

    return answer;
}
