function calculate(array) {
    let result = 0;
    array.forEach((item) => {
        result = Number(item);
    });
}

function solution(quiz) {
    let answer = [];
    quiz.forEach((item, index, array) => {
        array[index] = item.split("=");
        console.log(array[index][0].includes("-"));
        if (array[index][0].includes("+")) {
            let numbers = array[index][0].split("+");
            console.log(array[index][0].split("+"));
        }
    });
    return answer;
}
