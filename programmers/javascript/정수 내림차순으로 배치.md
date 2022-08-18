# 정수 내림차순으로 배치하기

### **문제 설명**

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

### 제한 조건

- `n`은 1이상 8000000000 이하인 자연수입니다.

### 입출력 예

| n      | return |
| ------ | ------ |
| 118372 | 873211 |

## 내 풀이

```jsx
function solution(n) {
  return Number((n + "").split("").sort().reverse().join(""));
}
```

1. `n`을 문자열로 바꿈
2. `split()`을 통해 문자열을 배열로 바꿈
3. 배열을 `sort()` 메서드로 정렬함
4. 정렬된것을 `reverse()`를 통해 내림차순으로 바꿈
5. `join('')`을 통해 다시 합쳐줌
6. `Number()` 을 통해 숫자로 바꿈

## 다른 사람 풀이

```jsx
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}
```
