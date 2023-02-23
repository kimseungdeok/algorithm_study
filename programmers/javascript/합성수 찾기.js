function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++){
        let cnt = 0;
				// 자연수의 약수의 개수를 구하는 부분
        for(j = 0; j <= i; j++){
            if(i % j ===0) cnt++
        }
				// 약수의 개수가 2보다 크면(3이상이면) answer를 1증가시킴
        if(cnt > 2) {
            answer++
        }
    }
    return answer;
}