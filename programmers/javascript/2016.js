// date 객체를 사용하지 않고 풀기
// 1 : 31, 2 : 29, 3 : 31
// 4 : 30, 5 : 31, 6 : 30
// 7 : 31, 8 : 31, 9 : 30
// 10 : 31, 11 : 30, 12 : 31
function solution(a, b) {
    var answer = '';
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]

    let date = 0
    for(let i =0; i < a-1; i++){
        date += month[i]
    }
    date += b
    
    
    
    
    return day[(date+4)%7];
}