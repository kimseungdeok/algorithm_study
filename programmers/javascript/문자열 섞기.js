function solution(str1, str2) {
    var answer = new Array(str1.length + str2.length).fill("");
    answer = answer.map((item, index) => {
        if (index % 2 === 0) {
            return str1[index / 2];
        } else {
            return str2[Math.floor(index / 2)];
        }
    });

    return answer.join("");
}
