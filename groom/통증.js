// Run by Node.js
const readline = require("readline");

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    for await (const line of rl) {
        // console.log(line);
        let painValue = Number(line);

        let itemCount = 0; //
        while (true) {
            if (painValue === 0) {
                break;
            }
            if (painValue >= 14) {
                painValue -= 14;
                itemCount++;
            } else if (painValue >= 7) {
                painValue -= 7;
                itemCount++;
            } else if (painValue >= 1) {
                painValue -= 1;
                itemCount++;
            }
        }

        console.log(itemCount);
        rl.close();
    }

    process.exit();
})();
