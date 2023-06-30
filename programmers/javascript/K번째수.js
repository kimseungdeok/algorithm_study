// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때,
// k번째에 있는 수를 구하는 문제이다.

// 예시
// array = [1, 5, 2, 6, 3, 7, 4]
// commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
// 1. [2, 5, 3] => array의 2번째부터 5번째까지 자르고 정렬한다. [5, 2, 6, 3] => [2, 3, 5, 6] => 3번째 숫자는 5
// 2. [4, 4, 1] => array의 4번째부터 4번째까지 자르고 정렬한다. [6] => [6] => 1번째 숫자는 6
// 3. [1, 7, 3] => array의 1번째부터 7번째까지 자르고 정렬한다. [1, 5, 2, 6, 3, 7, 4] => [1, 2, 3, 4, 5, 6, 7] => 3번째 숫자는 3
// 따라서 [5, 6, 3]을 return한다.

function solution(array, commands) {
    let answer = commands.map((item) => {
        // 구조분해 할당을 이용해 i, j, k를 할당한다.
        let [i, j, k] = [item[0], item[1], item[2]];
        // slice()를 이용해 i번째부터 j번째까지 자른다.
        // sort()를 이용해 오름차순으로 정렬한다.
        const sliceArray = array.slice(i - 1, j).sort((a, b) => a - b);
        // k번째 숫자를 반환한다.
        return sliceArray[k - 1];
    });

    return answer;
}
