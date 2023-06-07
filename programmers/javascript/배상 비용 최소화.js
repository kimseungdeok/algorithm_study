function solution(no, works) {
    let result = 0;
    
    for(let i = 0; i < no; i++){
        works[works.indexOf(Math.max(...works))] -=1

    }
    
    works.forEach((item) => {
        result += item ** 2
    })

    return result;
}