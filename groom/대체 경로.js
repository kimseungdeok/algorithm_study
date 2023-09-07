const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M, S, E;
let city = [];

function bfs(day) {
    if (day === S || day === E) return -1;
    let distance = new Array(N + 1).fill(-1);
    let parent = new Array(N + 1).fill(-1);
    let q = [];
    q.push(S);
    distance[S] = 1;
    parent[S] = 0;

    while (q.length > 0) {
        let here = q.shift();
        for (let i of city[here]) {
            if (i === day) continue;
            if (distance[i] === -1) {
                q.push(i);
                distance[i] = distance[here] + 1;
                parent[i] = here;
            }
        }
    }
    return distance[E];
}

function main() {
    rl.question("", (input) => {
        const inputArray = input.split(" ").map(Number);
        N = inputArray[0];
        M = inputArray[1];
        S = inputArray[2];
        E = inputArray[3];

        city = new Array(N + 1).fill().map(() => []);

        rl.on("line", (line) => {
            const [a, b] = line.split(" ").map(Number);
            city[a].push(b);
            city[b].push(a);
        });

        rl.on("close", () => {
            for (let i = 1; i <= N; i++) {
                console.log(bfs(i));
            }
        });
    });
}

main();
