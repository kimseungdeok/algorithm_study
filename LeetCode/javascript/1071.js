/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let answer = "";
    const shortStr = str1.length >= str2.length ? str2 : str1;
    const longStr = str1.length >= str2.length ? str1 : str2;
    let splitStr = shortStr;
    let splitArr = [];
    for (let i = shortStr.length; i > 0; i--) {
        splitStr = shortStr.substring(0, i);
        splitArr = longStr.split(splitStr);
        if (splitArr.every((el) => el === "")) {
            break;
        }
    }

    answer = splitStr;
    splitArr.forEach((item) => {
        if (item !== "") {
            answer = "";
        }
    });

    return answer;
};
