function solution(order) {
    // 현재 위치를 나타내는 변수 idx와 스택 변수 stack을 초기화한다.
    let idx = 0;
    const stack = [];
  
    // order 배열을 순회하며, stack에 각 숫자를 push 한다.
    for (let i = 1; i <= order.length; i++) {
      stack.push(i);
  
      // stack의 마지막 요소와 order[idx] 값이 같으면 stack에서 pop 해주고,
      // idx 값을 증가시킨다.
      while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
        stack.pop();
        idx++;
      }
    }
    // idx 값을 반환한다.
    return idx;
  }
  