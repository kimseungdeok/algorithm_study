const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line.split(" ").map((el) => Number(el)));
}).on("close", function () {
    let [M, N, K] = input.shift();
    let secretRecipe = input.shift().join("");
    let userInput = input.shift().join("");

    console.log(userInput.includes(secretRecipe) ? "secret" : "normal");
});
