function solution(board, moves) {
    var answer = 0;
    let result = [];
    let boardLength = board.length;

    for (let i = 0; i < boardLength; i++) {
        for (let j = i + 1; j < boardLength; j++) {
            const temp = board[i][j];
            board[i][j] = board[j][i];
            board[j][i] = temp;
        }
    }

    board.forEach((item) => {
        item.splice(item.indexOf(0), item.lastIndexOf(0) + 1);
    });

    moves.forEach((item) => {
        let shiftItem = board[item - 1].shift();
        if (shiftItem !== undefined) {
            if (result[result.length - 1] === shiftItem) {
                answer += 2;
                result.pop();
            } else {
                result.push(shiftItem);
            }
        }
    });

    return answer;
}
