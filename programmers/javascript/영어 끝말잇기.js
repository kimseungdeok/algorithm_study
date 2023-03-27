function solution(n, words) {
    // 탈락자와 해당 차례를 초기화합니다.
    let answer = [0, 0];
  
    // words 배열을 순회합니다.
    for (let i = 0; i < words.length; i++) {
      // 현재 단어와 그 단어를 말한 차례, 몇 번째 차례인지를 저장합니다.
      let word = words[i];
      let p = i % n + 1;
      let turn = Math.ceil((i + 1)/n);
  
      // 첫 번째 단어는 검사하지 않습니다.
      if (i > 0) {
        // 이전 단어 마지막 글자
        let last = words[i - 1].split("").pop();
  
        // 중복이거나 틀린 경우
        if (i > words.indexOf(word) || words[i][0] !== last) {
          // 탈락자와 해당 차례를 저장합니다.
          answer = [p, turn];
          break;
        }
      }
    }
  
    // 탈락자와 해당 차례를 반환합니다.
    return answer;
  }
  