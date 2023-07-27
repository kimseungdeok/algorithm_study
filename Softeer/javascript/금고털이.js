const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout,
});
    
let input = [];
    
rl.on("line", (line)=>{
    input.push(line)
   	
});
    
rl.on("close", ()=>{
/*입력이 끝나고 실행할 코드*/
    // console.log(input)
    let answer = 0
    let [maxWeight, jewelryCount] = input.shift().split(" ")
    
    input = input.map(el => el.split(" ").map(el => Number(el))).sort((a,b) => b[1] - a[1])
    // console.log(input)
    maxWeight = Number(maxWeight)
    // console.log(maxWeight)
    while(maxWeight > 0) {
        input.forEach(item => {
            // console.log(item)
            if(maxWeight >= item[0]) {
                answer += item[0]*item[1]
                // console.log(item[0]*item [1], answer)
                maxWeight -= item[0]
            } else {
                answer += maxWeight * item[1]
                // console.log(answer)
                maxWeight = 0
            }
        })
    }
    console.log(answer)
	process.exit();
});