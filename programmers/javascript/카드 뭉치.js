function solution(cards1, cards2, goal) {
    let answer = "Yes";
    const cards1Length = cards1.length;
    const cards2Length = cards2.length;
    const goalLength = goal.length;
    let one = 0;
    let two = 0;

    for (let i = 0; i < goalLength; i++) {
        if (one < cards1Length && goal[i] === cards1[one]) {
            one++;
        } else if (two < cards2Length && goal[i] === cards2[two]) {
            two++;
        } else {
            answer = "No";
            break;
        }
    }

    return answer;
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]))