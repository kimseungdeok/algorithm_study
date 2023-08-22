const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    const length = Number(input.shift());

    const string = input.shift();

    let set = new Set();

    function getAllSubstrings(str) {
        const substrings = [];
        for (let i = 1; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                const part1 = str.substring(0, i);
                const part2 = str.substring(i, j);
                const part3 = str.substring(j);

                set.add(part1);
                set.add(part2);
                set.add(part3);
                substrings.push([part1, part2, part3]);
            }
        }

        return substrings;
    }
    getAllSubstrings(string);

    const stringArray = [...set].sort();
    // console.log(stringArray)
    let sums = [];
    getAllSubstrings(string).forEach((el) => {
        let sum = 0;
        for (let i = 0; i < el.length; i++) {
            sum += stringArray.indexOf(el[i]) + 1;
        }
        sums.push(sum);
    });

    console.log(Math.max(...sums));
});
