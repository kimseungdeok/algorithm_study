function solution(arr)
{
    const result = arr.reduce((acc, cur, idx) => { 
        
        if(acc.length === 0 || acc[acc.length - 1] !== cur) {
            
            acc.push(cur);
        }
        return acc
    }, [])

    
    return result;
}