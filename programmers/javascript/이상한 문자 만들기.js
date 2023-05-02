function solution(s) {
    s = s.split(" ")
    s.forEach((item, index, array) => {
        array[index] = item.split("")
        for(let i = 0; i < item.length; i++){
            if(i % 2 === 0){
                array[index][i] = array[index][i].toUpperCase()
            } else {
                array[index][i] = array[index][i].toLowerCase()
            }
        }
        array[index] = array[index].join("")
    })
    return s.join(" ");
}