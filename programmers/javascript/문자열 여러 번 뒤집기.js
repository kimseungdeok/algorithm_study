function solution(my_string, queries) {
    my_string = my_string.split("");
    queries.forEach((el) => {
        let firstPart = my_string.slice(0, el[0]);
        let secondPart = my_string.slice(el[0], el[1] + 1);
        let thirdPart = my_string.slice(el[1] + 1);

        my_string = firstPart.concat(secondPart.reverse()).concat(thirdPart);
    });
    return my_string.join("");
}
