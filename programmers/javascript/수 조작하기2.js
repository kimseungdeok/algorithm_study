function solution(numLog) {
    var answer = "";
    let curLocation = numLog[0];
    const move = {
        w: 1,
        s: -1,
        d: 10,
        a: -10,
    };

    for (let i = 1; i < numLog.length; i++) {
        if (numLog[i] === curLocation + move["w"]) {
            answer += "w";
            curLocation += move["w"];
        } else if (numLog[i] === curLocation + move["s"]) {
            answer += "s";
            curLocation += move["s"];
        } else if (numLog[i] === curLocation + move["d"]) {
            answer += "d";
            curLocation += move["d"];
        } else if (numLog[i] === curLocation + move["a"]) {
            answer += "a";
            curLocation += move["a"];
        }
    }

    return answer;
}
