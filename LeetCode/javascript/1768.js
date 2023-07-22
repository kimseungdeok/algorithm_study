/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let one = 0;
    let two = 0;
    const len1 = word1.length;
    const len2 = word2.length;
    let answer = "";
    while (one + two < len1 + len2) {
        if (one < len1) {
            answer += word1[one];
            one += 1;
        }
        if (two < len2) {
            answer += word2[two];
            two += 1;
        }
    }
    return answer;
};
