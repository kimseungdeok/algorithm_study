const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const n = parseInt(input[0]);
    const coords = input[1].split(" ").map((str) => parseInt(str));
    const matrix = input.slice(2, 2 + n).map((line) => line.split(" "));

    function getScore(x, y, cnt, dir, visited) {
        if (visited[x][y]) {
            return 0;
        }
        visited[x][y] = true;

        if (cnt === 0) {
            const parts = matrix[x][y].split("");
            cnt = parseInt(parts.slice(0, parts.length - 1).join(""));
            dir = parts[parts.length - 1];
        }

        if (dir === "U") {
            return (
                1 +
                getScore(x - 1 >= 0 ? x - 1 : n - 1, y, cnt - 1, dir, visited)
            );
        } else if (dir === "D") {
            return 1 + getScore((x + 1) % n, y, cnt - 1, dir, visited);
        } else if (dir === "L") {
            return (
                1 +
                getScore(x, y - 1 >= 0 ? y - 1 : n - 1, cnt - 1, dir, visited)
            );
        } else if (dir === "R") {
            return 1 + getScore(x, (y + 1) % n, cnt - 1, dir, visited);
        }
    }

    const score = [];

    for (let i = 0; i < coords.length; i++) {
        coords[i]--;
    }

    for (let i = 0; i < coords.length; i += 2) {
        const x = coords[i];
        const y = coords[i + 1];
        const visited = new Array(n)
            .fill(false)
            .map(() => new Array(n).fill(false));
        score.push(getScore(x, y, 0, "", visited));
    }

    if (score[0] < score[1]) {
        console.log("player", score[1]);
    } else {
        console.log("goorm", score[0]);
    }
});
