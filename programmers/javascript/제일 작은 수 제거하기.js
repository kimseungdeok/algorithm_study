function solution(arr) {
    var answer = [];
    let arrLen = arr.length
    if(arrLen === 1){
        return [-1];
    } else{
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
        return arr
    }

}