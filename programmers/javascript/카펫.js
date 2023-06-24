function solution(brown, yellow) {
    let answer = [];
    // 모든 격자의 개수를 나타내는 변수
    // 이 변수를 활용해서 사각형을 만들 수 있는 조합들을 확인할 것
    const allGrid = brown + yellow;

    // 모든 격자 개수의 약수를 담을 배열
    // 사각형은 가로 * 세로이므로 약수를 구할때 사각형을 만들수 있는 조합을 확인할 수 있다.
    let yaksu = [];

    // 약수를 확인하는 로직
    // 반복문을 통해 약수의 절반을 확인 가능
    // 예를들어 24라는 수가 있을때 1, 2, 3, 4가 들어감
    for (let i = 0; i <= Math.sqrt(allGrid); i++) {
        if (allGrid % i === 0) {
            yaksu.push(i);
        }
    }
    // 위에서 구한 약수의 절반과 그에 맞는 짝을 구하는 로직
    // 24라는 수가 있을때 1,2,3,4에 맞는 짝을 배열로 만듦
    // 단 1과 2일때는 제외를 해줬는데
    // 그 이유는 1과 2일때는 yellow의 개수가 1이상일수 없기 때문이다.
    let yaksuTwin = yaksu
        .map((item) => {
            if (item > 2) {
                return [allGrid / item, item];
            }
        })
        .filter((item) => item !== undefined);

    // 만약 가능한 조합이 1개라면 바로 정답을 반환한다.
    if (yaksuTwin.length === 1) {
        return yaksuTwin[0];
    }
    // 그렇지 않다면 반복문을 돌려서
    // ((가로 + 세로) * 2 - 4)를 계산해서 이 연산이 brown과 같은지 확인
    else {
        yaksuTwin.forEach((item) => {
            if ((item[0] + item[1]) * 2 - 4 === brown) {
                answer = item;
            }
        });
    }

    return answer;
}
