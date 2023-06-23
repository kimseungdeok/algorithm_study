function solution(citations) {
    var answer = 0;


    citations.sort((a, b) => {
        return a - b;
    });
    
    const max = Math.max(...citations);

    for (let h = 0; h <= max; h++) {
        let count = 0;
        for (let i = 0; i < citations.length; i++) {
            if (h <= citations[i]) {
                count += 1;
            }
        }
        if (h <= count) {
            answer = h;
        }
    }
    return answer;
}
