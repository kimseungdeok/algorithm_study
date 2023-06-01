function solution(num_list) {
    let 짝수 = 0;
    let 홀수 = 0;
    num_list.forEach((item) => {
        if (item % 2 == 0) {
            짝수++;
        } else {
            홀수++;
        }
    });

    return [짝수, 홀수];
}
