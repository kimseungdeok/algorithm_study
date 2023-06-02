function solution(numbers) {
    const numbersLen = numbers.length;
    var answer = new Array(numbersLen).fill(-1);

    for (let i = 0; i < numbersLen; i++) {
        let num = numbers[i];
        for (let j = i + 1; j < numbersLen; j++) {
            if (numbers[j] > num) {
                answer[i] = numbers[j];
                break;
            }
        }
    }
    return answer;
}
