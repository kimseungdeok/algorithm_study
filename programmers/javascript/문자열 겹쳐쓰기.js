function solution(my_string, overwrite_string, s) {
    let sArray = new Array(s).fill(0);
    overwrite_string = sArray.concat(overwrite_string.split(""));

    my_string = my_string.split("");
    for (let i = s; i < overwrite_string.length; i++) {
        my_string[i] = overwrite_string[i];
    }
    return my_string.join("");
}
