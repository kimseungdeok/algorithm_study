function solution(dirs) {
    let curLoc = [0, 0];
    let history = new Set();
    dirs = dirs.split("");

    dirs.forEach((item) => {
        if (
            curLoc[0] <= 5 &&
            curLoc[1] <= 5 &&
            curLoc[0] >= -5 &&
            curLoc[1] >= -5
        ) {
            history.add(curLoc.join(","));
            if (item == "U") {
                curLoc[0]++;
            } else if (item == "D") {
                curLoc[0]--;
            } else if (item == "R") {
                curLoc[1]++;
            } else if (item == "L") {
                curLoc[1]--;
            }
        }
    });

    return history.size;
}
