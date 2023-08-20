// Run by Node.js
const readline = require("readline");

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    for await (const line of rl) {
        // console.log('Hello Goorm! Your input is', line);
        const input = line;
        let isHaveBoth = false;
        // split이 인자로 받은 문자열을 기준으로 모두 나누기때문에
        // 한번만 나누기 위해 만든 함수

        const getFirstSplit = (num, sItem) => {
            if (num.includes(sItem)) {
                let first = num.slice(0, num.indexOf(sItem));
                // let second = num.slice(num.indexOf(sItem), num.indexOf(sItem)+2)
                let third = num.slice(num.indexOf(sItem) + 2);
                return [first, third];
            } else {
                return [num];
            }
        };

        getFirstSplit(input, "12").forEach((el) => {
            if (el.includes("21")) {
                isHaveBoth = true;
            }
        });

        getFirstSplit(input, "21").forEach((el) => {
            if (el.includes("12")) {
                isHaveBoth = true;
            }
        });


        console.log(isHaveBoth ? "Yes" : "No");

        rl.close();
    }

    process.exit();
})();
