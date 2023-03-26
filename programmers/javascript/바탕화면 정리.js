function solution(wallpaper) {
    var answer = [-1,-1,-1,-1];
    wallpaper.forEach((item, index, arr)=>{
        arr[index] = arr[index].split("")
    })

    let rowArr = []
    let colArr = []
    wallpaper.forEach((item, index, arr) => {
        if(item.includes("#")){
            colArr.push(index)
        }
        item.forEach((item, index, arr) =>{
            if(item === "#"){
                rowArr.push(index)
            }
        })
    })

    answer[0] = Math.min(...colArr)
    answer[1] = Math.min(...rowArr)
    answer[2] = Math.max(...colArr) + 1
    answer[3] = Math.max(...rowArr) + 1
    return answer;
}