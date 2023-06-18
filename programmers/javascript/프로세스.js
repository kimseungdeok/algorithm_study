function solution(priorities, location) {
    let answer = 0;
    const priorityAndIndex = priorities.map((priority, index) => {
        return { priority, index };
    });

    while (priorityAndIndex.length) {
        const process = priorityAndIndex.shift();

        if (priorityAndIndex.some((el) => el.priority > process.priority)) {
            priorityAndIndex.push(process);
        } else {
            answer++;
            if (priorityAndIndex.index === location) break;
        }
    }

    return answer;
}
