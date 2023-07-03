const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

let [N, M] = input.split(" ").map((item) => Number(item));

function findSequence(N, M, selected, visited) {
    if (selected.length === M) {
        console.log(selected.join(" "));
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            selected.push(i);
            findSequence(N, M, selected, visited);
            selected.pop();
            visited[i] = false;
        }
    }
}

function solution(N, M) {
    const selected = [];
    const visited = new Array(N + 1).fill(false);
    // console.log(visited)
    findSequence(N, M, selected, visited);
}

solution(N, M);
