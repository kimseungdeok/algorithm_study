const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    const [n, k] = input[0].split(" ").map(Number);
    const matrix = input
        .slice(1, n + 1)
        .map((line) => line.split(" ").map(Number));
    const regionCounts = new Array(31).fill(0);
    const visited = new Array(n).fill(null).map(() => new Array(n).fill(false));

    const bfs = (x, y) => {
        visited[x][y] = true;
        const queue = [[x, y]];
        let count = 0;

        while (queue.length > 0) {
            const [i, j] = queue.shift();
            count++;

            const directions = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];

            for (const [dx, dy] of directions) {
                const di = i + dx;
                const dj = j + dy;
                if (
                    di >= 0 &&
                    di < n &&
                    dj >= 0 &&
                    dj < n &&
                    matrix[di][dj] === matrix[x][y] &&
                    !visited[di][dj]
                ) {
                    visited[di][dj] = true;
                    queue.push([di, dj]);
                }
            }
        }

        return count >= k;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                if (bfs(i, j)) {
                    regionCounts[matrix[i][j]]++;
                }
            }
        }
    }

    let maxVal = 0;
    let maxIdx = 1;
    for (let i = 1; i < 31; i++) {
        if (regionCounts[i] >= maxVal) {
            maxVal = regionCounts[i];
            maxIdx = i;
        }
    }
    console.log(maxIdx);
});
