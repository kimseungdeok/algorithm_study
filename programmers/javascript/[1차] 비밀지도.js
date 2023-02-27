// 1. n 만큼 for문을 돌려서 각각의 10진수를 2진수로 바꿈
// 2. 2진수로 바꾸면서 배열로 만듦
// 3. arr1와 arr2를 합침(같은 인덱스끼리)
// 4. 0인건 빈칸으로 1이상인것은 #으로 바굼
function solution(n, arr1, arr2) {
    let answer = [];

    for (let i = 0; i < n; i++) {
        arr1[i] = [...arr1[i].toString(2)];
        arr2[i] = [...arr2[i].toString(2)];
    }

    for (let i = 0; i < n; i++) {
        while (arr1[i].length < n) {
            arr1[i].unshift("0");
        }
        while (arr2[i].length < n) {
            arr2[i].unshift("0");
        }
    }

    for (let i = 0; i < n; i++) {
        answer[i] = [];
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] + arr2[i][j] !== "00") {
                answer[i].push("#");
            } else {
                answer[i].push(" ");
            }
        }
    }

    for (let i = 0; i < n; i++) {
        answer[i] = answer[i].join("");
    }

    return answer;
}
