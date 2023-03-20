function solution(dartResult) {
    var answer = 0;
    // let result = dartResult.replace(/[*]/g,"*2+")
    // result = result.replace(/[#]/g,"*-1+")
    // result = result.replace(/S/g,"**1+")
    // result = result.replace(/D/g,"**2+")
    // result = result.replace(/T/g,"**3+")
    // console.log(result)
    
    // let arr = dartResult.match(/\d*[A-Z](\*|#)?/g)
let arr = dartResult.match(/\d*[A-Z](\*|#)?/g);

    console.log(arr)
    arr.forEach((item, index, arr)=>{
        // arr[index] = arr[index].replace(/\#/g,"*(-1)")
        arr[index] = arr[index].replace(/[*]/g,"*2")
        arr[index] = arr[index].replace(/#/g, "*(-1)");
        arr[index] = arr[index].replace(/S/g,"**1")
        arr[index] = arr[index].replace(/D/g,"**2")
        arr[index] = arr[index].replace(/T/g,"**3")  
        
    })
    
    console.log(arr)
    
    arr.forEach((item)=>{
        answer += eval(item)
    })
    return answer;
    
}