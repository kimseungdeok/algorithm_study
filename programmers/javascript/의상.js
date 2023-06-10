function solution(clothes) {
    const clothesMap = {};
    let answer = 1;
    // 의상 종류별로 갯수를 저장
    clothes.forEach((row) => {
        const [name, kinds] = row;
        if (clothesMap.hasOwnProperty(kinds)) {
            clothesMap[kinds]++;
        } else {
            clothesMap[kinds] = 1;
        }
    });

    for (const key in clothesMap) {
        // 해당 종류의 의상을 안 입는 경우도 있을 수 있으니
        // 의상 개수에 1을 더한 값을 곱해야 함
        answer *= clothesMap[key] + 1;
    }
    // 최소 한 개의 의상은 입어야 하니 모든 의상을 안 입는 경우를 빼줘야 함
    return answer - 1;
}
