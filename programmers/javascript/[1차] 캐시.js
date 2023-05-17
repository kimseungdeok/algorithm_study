function solution(cacheSize, cities) {
    // cities 배열이 없을 경우 0 리턴
    if (cities.length === 0) return 0;
    // cache가 없을 경우 모든 cities의 실행시간은 5.
    if (cacheSize === 0) return cities.length * 5;
    var queue = [];
    var answer = 0;

    // 모두 대문자로 바꿔줌
    let cities2 = cities.map((v) => v.toUpperCase());
    console.log(cities);

    for (var i = 0; i < cities2.length; i++) {
        // 큐가 캐시사이즈만큼 안될경우와 큐가 캐시사이즈만큼 됐을 때를 나눔
        // LRU 경우 따로 빼줌 ( 캐시에 해당 cities가 있으면 캐시에서 지우고 큐의 제일 뒤에 넣어줌
        if (queue.length < cacheSize) {
            if (queue.indexOf(cities2[i]) >= 0) {
                answer++;
                queue.push(queue.splice(queue.indexOf(cities2[i]), 1)[0]);
            } else {
                queue.push(cities2[i]);
                answer += 5;
            }
        } else {
            if (queue.indexOf(cities2[i]) >= 0) {
                answer++;
                queue.push(queue.splice(queue.indexOf(cities2[i]), 1)[0]);
            } else {
                answer += 5;
                queue.shift();
                queue.push(cities2[i]);
            }
        }
    }
    return answer;
}
