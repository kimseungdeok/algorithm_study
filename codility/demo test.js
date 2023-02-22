// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    A.sort(function(a,b){
        return a-b;
    });

    let B = new Set(A);
    B = [...B]

    // console.log(B)
    if(B[0] > 1 || B[0] < 0){
        return 1
    } else {
        for(let i = 0; i <= 100000; i++){
            if(i+1 === B[i]){
                continue
            } else{
                return i + 1
            }
        }
    }

    
    return 0;
}