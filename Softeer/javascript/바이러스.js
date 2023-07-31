const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ").map((el) => BigInt(el)); 
}).on("close", function () {
    // console.log(input)

    const [K, P, N] = input;
    let answer = K;
    const mod = BigInt(1000000007); 

    for (let i = 0; i < N; i++) {
        answer *= P;
        answer %= mod;
    }

    console.log(answer.toString()); 
});
