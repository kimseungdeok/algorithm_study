function solution(s) {
    let answer = true;
    let arr = s.split("");
    const arrLen = arr.length;
    console.log(arr);
    let openCount = 0;
    let closeCount = 0;
    let stack = [];

    for (let i = 0; i < arrLen; i++) {
        if (arr[i] === "(") {
            openCount++;
        } else {
            closeCount++;
        }
    }
    // console.log(openCount, closeCount)
    if (arr[0] === "(" && arr[arrLen - 1] === ")") {
        if (openCount === closeCount) {
            for (let i = 0; i < arrLen; i++) {
                if (arr[i] === "(") {
                    stack.push(arr[i]);
                } else {
                    stack.pop();
                }
            }
            console.log(stack);
            if (stack.length === 0) {
                answer = true;
            } else {
                answer = false;
            }
        } else {
            answer = false;
        }
    } else {
        answer = false;
    }

    return answer;
}
