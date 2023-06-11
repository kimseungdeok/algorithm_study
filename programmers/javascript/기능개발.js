function solution(progresses, speeds) {
    let answer = [];
    let workDays = [];
    progresses.forEach((item, index) => {
        let progress = item;
        let workDay = 0; // 각 기능 별로 걸리는 기간을 위한 변수
        while (progress < 100) {
            progress += speeds[index];
            workDay += 1;
        }
        workDays.push(workDay);
    });

    let task = 1;
    let 큰수 = workDays[0];
    workDays.forEach((item, index) => {
        if (큰수 >= workDays[index + 1]) {
            task += 1;
        } else {
            answer.push(task);
            큰수 = workDays[index + 1];
            task = 1;
        }
    });
    return answer;
}
