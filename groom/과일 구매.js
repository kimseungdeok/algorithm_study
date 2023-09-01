const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (nk) => {
    let [N, K] = nk.split(" ").map(Number);
    const fruits = new Array(N);

    let lineCounter = 0;

    rl.on("line", (line) => {
        const [P, C] = line.split(" ").map(Number);
        fruits[lineCounter] = [Math.floor(C / P), P];
        lineCounter++;

        if (lineCounter === N) {
            rl.close();

            fruits.sort((a, b) => b[0] - a[0]);

            let maxSatisfaction = 0;

            for (const [c, p] of fruits) {
                const cnt = Math.min(K, p);
                maxSatisfaction += c * cnt;
                K -= cnt;

                if (K === 0) {
                    break;
                }
            }

            console.log(maxSatisfaction);
        }
    });
});
