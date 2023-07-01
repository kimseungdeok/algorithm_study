// 문제 설명
// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고
// 나머지 논문이 h번 이하 인용되었다면 h가 이 과학자의 H-Index입니다.
// H-Index를 구하는 함수를 작성하세요.

// 예시
// [3, 0, 6, 1, 5] => 3
// [0, 0, 0, 0, 0] => 0


function solution(citations) {
    // citations를 오름차순으로 정렬한다.
    // 정렬하는 이유는 정렬하면 인덱스가 h번 이상 인용된 논문의 개수이기 때문이다.
    citations.sort((a, b) => a - b);
    // citations의 최대값을 구한다.
    const citationsMax = Math.max(...citations);
    // citations의 길이를 구한다.
    const citationsLength = citations.length;

    // h를 citationsMax부터 0까지 1씩 감소시키면서 반복한다.
    for (let h = citationsMax; h >= 0; h--) {
        let count = 0;
        // citations의 모든 요소를 순회하면서 h번 이상 인용된 논문의 개수를 구한다.
        for (let i = 0; i < citationsLength; i++) {
            let selectedCitation = citations[i];

            if (selectedCitation >= h) {
                count += 1;
            }
        }
        // h번 이상 인용된 논문의 개수가 h편 이상이면 h를 반환한다.
        if (count >= h) {
            return h;
        }
    }
}
