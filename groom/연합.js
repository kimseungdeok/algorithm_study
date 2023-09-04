const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let n, m;
let parent, matrix;

rl.question("", (line) => {
    const [nStr, mStr] = line.trim().split(" ");
    n = parseInt(nStr);
    m = parseInt(mStr);

    parent = Array.from({ length: n + 1 }, (_, i) => i);
    matrix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    readEdges(0);
});

function readEdges(edgeCount) {
    if (edgeCount === m) {
        processEdges();
        return;
    }

    rl.question("", (line) => {
        const [aStr, bStr] = line.trim().split(" ");
        const a = parseInt(aStr);
        const b = parseInt(bStr);
        matrix[a][b] = 1;
        readEdges(edgeCount + 1);
    });
}

function find(num) {
    if (parent[num] !== num) {
        parent[num] = find(parent[num]);
    }
    return parent[num];
}

function union(a, b) {
    const fa = find(a);
    const fb = find(b);
    if (fa < fb) {
        parent[fb] = fa;
    } else if (fa > fb) {
        parent[fa] = fb;
    }
}

function processEdges() {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (matrix[i][j] === 1 && matrix[j][i] === 1) {
                union(i, j);
            }
        }
    }

    const unionSet = new Set();
    for (let i = 1; i <= n; i++) {
        unionSet.add(find(i));
    }

    console.log(unionSet.size);

    rl.close();
}
