function solution(players, callings) {
    const hash = new Map();

    // 각 선수의 이름과 인덱스를 매핑
    players.forEach((name, index) => {
        hash.set(name, index);
    })

    // 각 선수를 호출하는 순서대로 이동
    callings.forEach(name => {
        const currIdx = hash.get(name);
        const front = players[currIdx - 1];

        // 현재 선수와 앞에 있는 선수의 위치를 변경
        [players[currIdx], players[currIdx -1]] = [players[currIdx -1], players[currIdx]];

        // 변경된 위치를 hash에 반영
        hash.set(name, hash.get(name) - 1);
        hash.set(front, hash.get(name) + 1);
    })

    return players;
}
