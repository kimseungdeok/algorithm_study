const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Pos {
    constructor(y, x) {
        this.y = y;
        this.x = x;
    }
}

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

function search(arr, y, x, d, k, N) {
    const queue = [];
    const list = [];
    list.push(new Pos(y, x));
    const visited = new Array(N).fill().map(() => new Array(N).fill(false));

    queue.push(new Pos(y, x));
    visited[y][x] = true;

    while (queue.length > 0) {
        const cur = queue.shift();

        for (let i = 0; i < 4; i++) {
            const tempY = cur.y + dy[i];
            const tempX = cur.x + dx[i];

            if (
                inSpace(tempY, tempX, N) &&
                !visited[tempY][tempX] &&
                arr[tempY][tempX] === d
            ) {
                visited[tempY][tempX] = true;
                list.push(new Pos(tempY, tempX));
                queue.push(new Pos(tempY, tempX));
            }
        }
    }

    if (list.length >= k) {
        for (const cur of list) {
            arr[cur.y][cur.x] = ".";
        }
    }
}

function inSpace(y, x, N) {
    return y >= 0 && x >= 0 && y < N && x < N;
}

let inputLines = [];
let N, K, Q;
let arr = [];

function processInputLine(line) {
    inputLines.push(line);
}

function processInput() {
    const inputArray = inputLines[0].trim().split(" ");
    N = parseInt(inputArray[0]);
    K = parseInt(inputArray[1]);
    Q = parseInt(inputArray[2]);

    for (let i = 1; i <= N; i++) {
        arr.push(inputLines[i].split(""));
    }

    for (let i = N + 1; i <= N + Q; i++) {
        const qArray = inputLines[i].trim().split(" ");
        const y = parseInt(qArray[0]) - 1;
        const x = parseInt(qArray[1]) - 1;
        const d = qArray[2];

        arr[y][x] = d;
        search(arr, y, x, d, K, N);
    }

    for (let i = 0; i < N; i++) {
        console.log(arr[i].join(""));
    }
}

rl.on("line", processInputLine);

rl.on("close", () => {
    processInput();
});
