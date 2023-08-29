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
    const n = Number(input.shift());
    input = input.map((el) => el.split(" ").map((el) => Number(el)));

    function minGeneratorsToSupplyPower(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = Array.from({ length: rows }, () =>
            Array(cols).fill(false)
        );

        function isValid(x, y) {
            return x >= 0 && x < rows && y >= 0 && y < cols;
        }

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let generators = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (!visited[i][j] && grid[i][j] === 1) {
                    generators++;
                    const stack = [[i, j]];
                    while (stack.length > 0) {
                        const [x, y] = stack.pop();
                        visited[x][y] = true;
                        for (const [dx, dy] of directions) {
                            const newX = x + dx;
                            const newY = y + dy;
                            if (
                                isValid(newX, newY) &&
                                !visited[newX][newY] &&
                                grid[newX][newY] === 1
                            ) {
                                stack.push([newX, newY]);
                            }
                        }
                    }
                }
            }
        }

        return generators;
    }

    const result = minGeneratorsToSupplyPower(input);
    console.log(result); // 출력 결과: 2
});
