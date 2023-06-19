function addCommas(str, interval) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (i > 0 && i % interval === 0) {
            result += ",";
        }
        result += str[i];
    }

    return result;
}

function solution(arr) {
    let answer = "";
    const type = {
        BOOL: 1,
        SHORT: 2,
        FLOAT: 4,
        INT: 8,
        LONG: 16,
    };
    for (let i = 0; i < arr.length; i++) {
        answer += "#".repeat(type[arr[i]]);
        if (arr[i] === "BOOL") {
            // answer += "#".repeat(type.BOOL);
            if (arr[i + 1] === "SHORT") {
                answer += ".";
                // answer += "#".repeat(type.SHORT);
            } else if (arr[i + 1] === "FLOAT") {
                answer += ".".repeat(3);
                // answer += "#".repeat(type.FLOAT);
            } else if (arr[i + 1] === "INT") {
                answer += ".".repeat(7);
                // answer += "#".repeat(type.INT);
            } else if (arr[i + 1] === "LONG") {
                answer += ".".repeat(7);
                // answer += "#".repeat(type.LONG);
            }
        } else if (type[arr[i]] + type[arr[i + 1]] < 8) {
            // answer += "#".repeat(type[arr[i]]);
            answer += ".".repeat(8 - (type[arr[i]] + type[arr[i + 1]]));
        } else if (type[arr[i]] + type[arr[i + 1]] >= 8) {
            answer += ".".repeat(8 - type[arr[i]]);
        }
    }
    return addCommas(answer, 8);
}

console.log(solution(["INT", "INT", "BOOL", "SHORT", "LONG"]));
