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
    // console.log("Hello Goorm! Your input is " + input);
    const [n, m, k] = input.shift().split(" ").map(Number);

    const arr = input.map((el) => el.split(" ").map(Number));

    const graph = {};

    arr.forEach((v) => {
        const [a, b] = v;

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    });

    let last = k;
    const visited = [k];

    while (true) {
        if (!graph[last]) break;

        const min = graph[last]
            .filter((n) => !visited.includes(n))
            .sort((a, b) => a - b)[0];

        if (!min) break;

        last = min;
        visited.push(min);
    }
    console.log(visited.length, last);
});
