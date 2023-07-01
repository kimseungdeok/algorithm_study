// 문제 설명
// 모음만 있는 사전이 있다.
// 주어진 단어가 사전에서 몇 번째인지를 return 하는 함수를 만드는 문제이다.

// 예시
// 단어 : "AAAAE"
// 사전에서의 순서 : 6

function calculateOrder(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum += 5 ** i; // num 값에 따라 5의 거듭제곱을 sum에 더해준다.
    }
    return sum; // 최종적으로 계산된 sum 값을 반환한다.
}

function solution(word) {
    let answer = 0;

    const aeiou = {
        // 각 모음(A, E, I, O, U)에 대한 인덱스 값을 저장한 객체를 선언한다.
        A: 0,
        E: 1,
        I: 2,
        O: 3,
        U: 4,
    };

    word.split("").map((char, index) => {
        // word 문자열을 하나씩 나누어서 반복한다.
        answer += calculateOrder(4 - index) * aeiou[char] + 1; // calculateOrder 함수와 aeiou 객체를 이용하여 계산을 수행한다.
    });

    return answer; // 계산된 answer 값을 반환한다.
}
