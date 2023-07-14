function solution(array, n) {
    let newArray = array
        .sort((a, b) => a - b)
        .map((item) => Math.abs(n - item));
    return array[newArray.indexOf(Math.min(...newArray))];
}
