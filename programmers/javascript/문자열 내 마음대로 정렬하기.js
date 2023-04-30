function solution(strings, n) {
    strings = strings.sort().sort((a,b) => {return a.charCodeAt(n)-b.charCodeAt(n)})
    
    
    return strings;
}